import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";

class EterigaryUpgradeState extends BitPurchasableMechanicState {
  constructor(config) {
    super(config);
    this.registerEvents(config.checkEvent, () => this.tryUnlock());
  }

  get name() {
    return this.config.name;
  }

  get requirement() {
    return typeof this.config.requirement === "function" ? this.config.requirement() : this.config.requirement;
  }

  get lockEvent() {
    return typeof this.config.lockEvent === "function" ? this.config.lockEvent() : this.config.lockEvent;
  }

  get currency() {
    return Currency.eterigaryMachines;
  }

  get bitIndex() {
    return this.id;
  }

  get bits() {
    return player.reality.eterigaryUpgradeBits;
  }

  set bits(value) {
    player.reality.eterigaryUpgradeBits = value;
  }

  get hasPlayerLock() {
    return (player.reality.reqLock.eterigary & (1 << this.bitIndex)) !== 0;
  }

  set hasPlayerLock(value) {
    if (value) player.reality.reqLock.eterigary |= 1 << this.bitIndex;
    else player.reality.reqLock.eterigary &= ~(1 << this.bitIndex);
  }

  get isLockingMechanics() {
    return this.hasPlayerLock && this.isPossible && !this.isAvailableForPurchase;
  }

  // Required to be changed this way to avoid direct prop mutation in Vue components
  setMechanicLock(value) {
    this.hasPlayerLock = value;
  }

  toggleMechanicLock() {
    this.hasPlayerLock = !this.hasPlayerLock;
  }

  // Note we don't actually show the modal if we already failed or unlocked it
  tryShowWarningModal(specialLockText) {
    if (this.isPossible && !this.isAvailableForPurchase) {
      Modal.upgradeLock.show({ upgrade: this, isImaginary: false, isEterigary: true, isEndgame: false, specialLockText });
    }
  }

  get isAvailableForPurchase() {
    return (player.reality.eterigaryUpgReqs & (1 << this.id)) !== 0;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }

  get canBeApplied() {
    return super.canBeApplied;
  }

  tryUnlock() {
    if (!MachineHandler.isEMUnlocked || this.isAvailableForPurchase || !this.config.checkRequirement()) return;
    player.reality.eterigaryUpgReqs |= (1 << this.id);
    GameUI.notify.reality(`You've unlocked an Eterigary Upgrade: ${this.config.name}`);
    this.hasPlayerLock = false;
  }

  onPurchased() {
    EventHub.dispatch(GAME_EVENT.REALITY_UPGRADE_BOUGHT);
  }
}

class RebuyableEterigaryUpgradeState extends RebuyableMechanicState {
  get currency() {
    return Currency.eterigaryMachines;
  }

  get boughtAmount() {
    return player.reality.eterigaryRebuyables[this.id];
  }

  get canBeApplied() {
    return super.canBeApplied;
  }

  set boughtAmount(value) {
    player.reality.eterigaryRebuyables[this.id] = value;
  }

  onPurchased() {
    if (this.id === 7) {
      GameCache.staticGlyphWeights.invalidate();
    }
  }

  bulkPurchase() {
    if (!this.isAffordable) return false;
    this.boughtAmount += getInverseHybridCostScaling(
      Currency.eterigaryMachines.value,
      1e20,
      this.config.initialCost,
      this.config.costMult,
      this.config.costMult,
      DC.E309,
      1e3,
      this.config.costMult
    ).sub(player.reality.eterigaryRebuyables[this.id]).toNumber();
    Currency.eterigaryMachines.subtract(getHybridCostScaling(
      player.reality.eterigaryRebuyables[this.id] - 1,
      1e20,
      this.config.initialCost,
      this.config.costMult,
      this.config.costMult,
      DC.E309,
      1e3,
      this.config.costMult
    ));
    return true;
  }
}

EterigaryUpgradeState.index = mapGameData(
  GameDatabase.reality.eterigaryUpgrades,
  config => (config.id <= 10
    ? new RebuyableEterigaryUpgradeState(config)
    : new EterigaryUpgradeState(config))
);

export const EterigaryUpgrade = id => EterigaryUpgradeState.index[id];

export const EterigaryUpgrades = {
  all: EterigaryUpgradeState.index.compact(),
  get totalRebuyables() {
    const rebuyables = player.reality.eterigaryRebuyables;
    let total = 0;
    for (const i in rebuyables) total += rebuyables[i];
    return total;
  },
  get totalSinglePurchase() {
    return this.all.countWhere(u => u.isBought);
  },
  get allBought() {
    return (player.reality.eterigaryUpgradeBits >> 6) + 1 === 1 << (GameDatabase.reality.eterigaryUpgrades.length - 5);
  }
};

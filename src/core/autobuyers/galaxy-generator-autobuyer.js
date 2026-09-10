import { IntervaledAutobuyerState } from "./autobuyer";

export class GalaxyGeneratorAutobuyerState extends IntervaledAutobuyerState {
  get _upgradeName() {
    return ["additive", "multiplicative", "antimatterMult", "IPMult", "EPMult", "RSMult", "DTMult", "remnantPow", "exponential", "superExponential"][this.id - 1];
  }

  get data() {
    return player.auto.galaxyGenerator.all[this.id - 1];
  }

  get name() {
    return ["Base Galaxy Multiplier", "Multiplicative Galaxy Multiplier", "Antimatter Multiplier", "Infinity Point Multiplier", "Eternity Point Multiplier", "Reality Shard Multiplier", "Dilated Time Multiplier", "Remnant Power", "Galaxy Power", "Galaxy Dilation"][this.id - 1];
  }

  get interval() {
    return 1000 / Decimal.max(Decimal.log10(player.records.bestEndgame.galaxies.add(1)).sub(100), 1).toNumber();
  }

  get isUnlocked() {
    if (this.id === 10) return player.celestials.ra.pets.pelle.level >= 24;
    if (this.id === 9) return player.celestials.ra.pets.pelle.level >= 18;
    if (this.id === 8) return player.celestials.ra.pets.pelle.level >= 12;
    if (this.id === 7) return player.celestials.ra.pets.pelle.level >= 6;
    return ExpansionPack.pellePack.isBought;
  }

  get resetTickOn() {
    return PRESTIGE_EVENT.ENDGAME;
  }

  get bulk() {
    return 1;
  }

  tick() {
    if (Pelle.hasGalaxyGenerator) {
      super.tick();
      const upgradeName = this._upgradeName;
      GalaxyGeneratorUpgrades[upgradeName].purchase(false);
    }
  }

  static get entryCount() { return 10; }
  static get autobuyerGroupName() { return "Galaxy Generator Upgrade"; }
  static get isActive() { return player.auto.galaxyGenerator.isActive; }
  static set isActive(value) { player.auto.galaxyGenerator.isActive = value; }
}

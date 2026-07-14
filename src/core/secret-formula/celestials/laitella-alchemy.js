export const alchemyResources = {
  // T1 resources (Non-Effarig "base" resources)
  "Darkness": {
    id: LAITELLA_ALCHEMY_RESOURCE.DARKNESS,
    name: "Darkness",
    symbol: "TBD",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "provides a power to Dark Matter Dimensions",
    formatEffect: value => `Dark Matter Dimension multipliers ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
  "Destruction": {
    id: LAITELLA_ALCHEMY_RESOURCE.DESTRUCTION,
    name: "Destruction",
    symbol: "TBD",
    isBaseResource: true,
    effect: amount => 1 + amount / 70000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "provides a power to the Dark Matter Annihalation Multiplier",
    formatEffect: value => `Dark Matter Annihalation multipliers ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
  "Wormhole": {
    id: LAITELLA_ALCHEMY_RESOURCE.WORMHOLE,
    name: "Wormhole",
    symbol: "TBD",
    isBaseResource: true,
    effect: amount => 1 + amount / 75000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "provides a power to the Singularity amount",
    formatEffect: value => `Singularities ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
  "Reward": {
    id: LAITELLA_ALCHEMY_RESOURCE.REWARD,
    name: "Reward",
    symbol: "TBD",
    isBaseResource: true,
    effect: amount => Decimal.pow(10, amount / 1250),
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "Multiplies the reward for beating Laitella's reality",
    formatEffect: value => `Laitella's reality completion reward ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
}
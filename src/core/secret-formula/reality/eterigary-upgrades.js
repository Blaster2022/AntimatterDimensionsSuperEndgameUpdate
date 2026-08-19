const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.eterigaryRebuyables[props.id],
    1e20,
    props.initialCost,
    props.costMult,
    props.costMult,
    DC.E309,
    1e3,
    props.costMult
  );
  const { effect } = props;
  if (props.isDecimal) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, player.reality.eterigaryRebuyables[props.id]);
  else if (props.isQuadratic) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, (player.reality.eterigaryRebuyables[props.id] + 1) * (player.reality.eterigaryRebuyables[props.id] / 2));
  else props.effect = () => player.disablePostReality ? 1 : effect * player.reality.eterigaryRebuyables[props.id];
  if (!props.formatEffect) props.formatEffect = value => `+${format(value, 2, 2)}`;
  props.formatCost = value => format(value, 2, 0);
  return props;
};

export const eterigaryUpgrades = [
  rebuyable({
    name: "Temporal Aeromagnifier",
    id: 1,
    initialCost: 1,
    costMult: 50,
    description: () => `Increase Temporal Intensifier multiplier by +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "Replicative Aeromagnifier",
    id: 2,
    initialCost: 3,
    costMult: 60,
    description: () => `Increase Replicative Intensifier multiplier by +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "Eternal Aeromagnifier",
    id: 3,
    initialCost: 8,
    costMult: 45,
    description: () => `Increase Eternal Intensifier multiplier by +${format(0.02, 2, 2)}`,
    effect: 0.02
  }),
  rebuyable({
    name: "Superluminal Aeromagnifier",
    id: 4,
    initialCost: 18,
    costMult: 75,
    description: () => `Increase Superluminal Intensifier multiplier by +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "Boundless Aeromagnifier",
    id: 5,
    initialCost: 30,
    costMult: 36,
    description: () => `Increase Boundless Intensifier multiplier by +${format(0.03, 2, 2)}`,
    effect: 0.03
  }),
  rebuyable({
    name: "Mythical Augmentation",
    id: 6,
    initialCost: 1e4,
    costMult: 360,
    description: () => `Increase the Imaginary Machine cap by ${formatX(1e100)}`,
    effect: 1e100,
    formatEffect: value => `${formatX(value)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "Runic Detainment",
    id: 7,
    initialCost: 2e5,
    costMult: 750,
    description: () => `Delay the first ${formatInt(4)} levels of Glyph Instability starting level by ${formatInt(2000)}`,
    effect: 2000,
    formatEffect: value => `+${formatInt(value)} levels`
  }),
  rebuyable({
    name: "Unbounded Reinforcement",
    id: 8,
    initialCost: 1.5e6,
    costMult: 1500,
    description: () => `Raise Infinity Dimensions to ${formatPow(1.25, 2, 3)}`,
    effect: 1.25,
    formatEffect: value => `${formatPow(value, 2, 3)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "Stelliferous Agglomeration",
    id: 9,
    initialCost: 1.2e7,
    costMult: 2400,
    description: () => `Multiply Galaxy strength`,
    effect: 1.15,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "Amplified Nihility",
    id: 10,
    initialCost: 2e8,
    costMult: 4000,
    description: () => `Multiply Singularity gain`,
    effect: 1e100,
    formatEffect: value => `${formatX(value, 2)}`,
    isQuadratic: true
  }),
  {
    name: "NYI",
    id: 11,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 12,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 13,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 14,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 15,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 16,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 17,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 18,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 19,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 20,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 21,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 22,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 23,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 24,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
  {
    name: "NYI",
    id: 25,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI"
  },
];

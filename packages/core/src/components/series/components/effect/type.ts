export type EffectComponentOption = {
  show?: boolean;
  period?: number;
  delay?: number | ((idx: number) => number);
  /**
   * If move with constant speed px/sec
   * period will be ignored if this property is > 0,
   */
  constantSpeed?: number;
  symbol?: string;
  symbolSize?: number | number[];
  loop?: boolean;
  roundTrip?: boolean;
  /**
   * Length of trail, 0 - 1
   */
  trailLength?: number;
  /**
   * Default to be same with lineStyle.color
   */
  color?: string;
};
export type EffectOption = Partial<EffectComponentOption>;

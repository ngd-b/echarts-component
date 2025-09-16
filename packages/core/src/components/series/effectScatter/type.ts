import type { EffectScatterSeriesOption } from "echarts/charts";

export type { EffectScatterSeriesOption };
export type EffectScatterSeries = Partial<
  Omit<
    EffectScatterSeriesOption,
    | "type"
    | "rippleEffect"
    | "label"
    | "labelLine"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "universalTransition"
    | "tooltip"
  >
>;

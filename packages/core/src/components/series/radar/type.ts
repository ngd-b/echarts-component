import type { RadarSeriesOption } from "echarts/charts";

export type { RadarSeriesOption };
export type RadarSeries = Partial<
  Omit<
    RadarSeriesOption,
    | "type"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;

export const DefaultEffectRadarSeries: RadarSeries = {
  colorBy: "data",
  symbol: "circle",
  symbolSize: 10,
  // symbolRotate:0,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],

  selectedMode: false,
  data: [],
  zlevel: 0,
  z: 2,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};

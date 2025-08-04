import type { EffectScatterSeriesOption } from "echarts/charts";

export type { EffectScatterSeriesOption };
export type EffectScatterSeries = Partial<
  Omit<
    EffectScatterSeriesOption,
    | "type"
    | "rippleEffect"
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

export const DefaultEffectScatterSeries: EffectScatterSeries = {
  colorBy: "series",
  legendHoverLink: true,
  effectType: "ripple",
  showEffectOn: "render",
  coordinateSystem: "cartesian2d",
  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0,
  geoIndex: 0,
  calendarIndex: 0,

  symbol: "circle",
  symbolSize: 10,
  // symbolRotate:0,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],
  cursor: "pointer",
  selectedMode: false,
  progressive: 400,
  progressiveThreshold: 3000,
  seriesLayoutBy: "column",
  datasetIndex: 0,
  data: [],
  clip: true,
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

import type { PictorialBarSeriesOption } from "echarts/charts";

export type { PictorialBarSeriesOption };
export type PictorialBarSeries = Partial<
  Omit<
    PictorialBarSeriesOption,
    | "type"
    | "axisLine"
    | "progress"
    | "splitLine"
    | "axisTick"
    | "axisLabel"
    | "pointer"
    | "anchor"
    | "itemStyle"
    | "emphasis"
    | "title"
    | "detail"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;

export const DefaultPictorialBarSeries: PictorialBarSeries = {
  colorBy: "series",
  legendHoverLink: true,
  coordinateSystem: "cartesian2d",
  xAxisIndex: 0,
  yAxisIndex: 0,
  cursor: "pointer",
  selectedMode: false,
  barMinHeight: 0,
  barMinAngle: 0,
  barGap: "100%",
  symbol: "circle",
  symbolSize: ["100%", "100%"],
  symbolPosition: "start",
  symbolOffset: [0, 0],
  symbolRepeatDirection: "start",
  symbolClip: false,
  symbolPatternSize: 400,
  data: [],
  clip: false,
  z: 2,
  zlevel: 0,
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

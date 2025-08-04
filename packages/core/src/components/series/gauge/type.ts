import type { GaugeSeriesOption } from "echarts/charts";

export type { GaugeSeriesOption };
export type GaugeSeries = Partial<
  Omit<
    GaugeSeriesOption,
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

export const DefaultGaugeSeries: GaugeSeries = {
  colorBy: "data",
  data: [],
  zlevel: 0,
  z: 2,
  center: ["50%", "50%"],
  radius: "75%",
  legendHoverLink: true,
  startAngle: 225,
  endAngle: -45,
  clockwise: true,
  min: 0,
  max: 100,
  splitNumber: 10,
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

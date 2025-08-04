import type { SunburstSeriesOption } from "echarts/charts";

export type { SunburstSeriesOption };
export type SunburstSeries = Partial<
  Omit<
    SunburstSeriesOption,
    | "type"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "levels"
    | "tooltip"
  >
>;

export const DefaultSunburstSeries: SunburstSeries = {
  data: [],
  zlevel: 0,
  z: 2,
  center: ["50%", "50%"],
  radius: ["0", "75%"],
  nodeClick: "rootToNode",
  sort: "desc",
  renderLabelForZeroData: false,
  clockwise: true,
  startAngle: 90,
  selectedMode: false,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicOut",
  animationDelay: 0,
  animationDurationUpdate: 500,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};

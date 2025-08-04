import type { FunnelSeriesOption } from "echarts/charts";

export type { FunnelSeriesOption };
export type FunnelSeries = Partial<
  Omit<
    FunnelSeriesOption,
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
    | "universalTransition"
    | "tooltip"
  >
>;

export const DefaultFunnelSeries: FunnelSeries = {
  colorBy: "data",
  min: 0,
  max: 100,
  minSize: "0%",
  maxSize: "100%",
  orient: "vertical",
  sort: "descending",
  gap: 0,
  legendHoverLink: true,
  funnelAlign: "center",
  data: [],
  zlevel: 0,
  z: 2,
  left: 80,
  top: 60,
  right: 80,
  bottom: 60,
  width: "auto",
  height: "auto",
  seriesLayoutBy: "column",
  datasetIndex: 0,
  selectedMode: false,
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

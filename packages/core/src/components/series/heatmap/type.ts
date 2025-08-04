import type { HeatmapSeriesOption } from "echarts/charts";

export type { HeatmapSeriesOption };
export type HeatmapSeries = Partial<
  Omit<
    HeatmapSeriesOption,
    | "type"
    | "label"
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

export const DefaultHeatmapSeries: HeatmapSeries = {
  coordinateSystem: "cartesian2d",
  yAxisIndex: 0,
  xAxisIndex: 0,
  geoIndex: 0,
  calendarIndex: 0,
  pointSize: 20,
  blurSize: 20,
  minOpacity: 0,
  maxOpacity: 1,
  progressive: 400,
  progressiveThreshold: 3000,
  selectedMode: false,
  seriesLayoutBy: "column",
  datasetIndex: 0,
  data: [],
  zlevel: 0,
  z: 2,
  silent: false,
};

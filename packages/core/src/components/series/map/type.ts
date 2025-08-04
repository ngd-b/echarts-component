import type { MapSeriesOption } from "echarts/charts";

export type { MapSeriesOption };
export type MapSeries = Partial<
  Omit<
    MapSeriesOption,
    | "type"
    | "label"
    | "labelLayout"
    | "labelLine"
    | "itemStyle"
    | "emphasis"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "universalTransition"
    | "tooltip"
  >
>;

export const DefaultMapSeries: MapSeries = {
  colorBy: "series",
  roam: false,
  aspectScale: 0.75,
  zoom: 1,
  nameProperty: "name",
  selectedMode: false,
  data: [],
  zlevel: 0,
  z: 2,
  left: "auto",
  right: "auto",
  top: "auto",
  bottom: "auto",
  mapValueCalculation: "sum",
  seriesLayoutBy: "column",
  datasetIndex: 0,
  silent: false,
};

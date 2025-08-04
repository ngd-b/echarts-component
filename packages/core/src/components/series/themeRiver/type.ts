import type { ThemeRiverSeriesOption } from "echarts/charts";

export type { ThemeRiverSeriesOption };
export type ThemeRiverSeries = Partial<
  Omit<
    ThemeRiverSeriesOption,
    | "type"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "tooltip"
  >
>;

export const DefaultThemeRiverSeries: ThemeRiverSeries = {
  colorBy: "data",
  left: "5%",
  top: "5%",
  right: "5%",
  bottom: "5%",
  coordinateSystem: "singleAxis",
  boundaryGap: ["10%", "10%"],
  singleAxisIndex: 0,
  selectedMode: false,
  data: [],
  z: 2,
  zlevel: 0,
};

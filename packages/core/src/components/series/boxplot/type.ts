import type { BoxplotSeriesOption } from "echarts/charts";

export type { BoxplotSeriesOption };
export type BoxplotSeries = Partial<
  Omit<
    BoxplotSeriesOption,
    | "type"
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

export const DefaultBoxplotSeries: BoxplotSeries = {
  coordinateSystem: "cartesian2d",
  yAxisIndex: 0,
  xAxisIndex: 0,
  colorBy: "series",
  legendHoverLink: true,
  boxWidth: [7, 50],
  selectedMode: false,
  data: [],
  zlevel: 0,
  z: 2,
  silent: false,
  animationDuration: 800,
  animationEasing: "elasticOut",
  animationDelay: 0,
};

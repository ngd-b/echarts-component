import type { PieSeriesOption } from "echarts/charts";

export type { PieSeriesOption };
export type PieSeries = Partial<
  Omit<
    PieSeriesOption,
    | "type"
    | "emptyCircleStyle"
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

export const DefaultPieSeries: PieSeries = {
  colorBy: "data",
  legendHoverLink: true,
  // geoIndex: 0,
  // calendarIndex:0,
  selectedMode: false,
  selectedOffset: 10,
  clockwise: true,
  startAngle: 90,
  endAngle: "auto",
  minAngle: 0,
  padAngle: 0,
  minShowLabelAngle: 0,
  // roseType:false,
  avoidLabelOverlap: true,
  stillShowZeroSum: true,
  percentPrecision: 2,
  cursor: "pointer",
  zlevel: 0,
  z: 2,
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "auto",
  height: "auto",
  showEmptyCircle: true,
  center: ["50%", "50%"],
  radius: [0, "75%"],
  seriesLayoutBy: "column",
  datasetIndex: 0,
  data: [],
  silent: false,
  animationType: "expansion",
  animationTypeUpdate: "transition",
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicInOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};

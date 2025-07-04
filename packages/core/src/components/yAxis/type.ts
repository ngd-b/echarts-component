import type { YAXisOption } from "echarts/types/dist/shared";

export type { YAXisOption };
export type YAxis = Partial<
  Omit<
    YAXisOption,
    | "nameTextStyle"
    | "nameTruncate"
    | "axisLine"
    | "axisTick"
    | "minorTick"
    | "axisLabel"
    | "splitLine"
    | "minorSplitLine"
    | "splitArea"
    | "axisPointer"
    | "tooltip"
  >
>;

export const DefaultYAxis: YAxis = {
  show: true,
  gridIndex: 0,
  // alignTicks:false,
  offset: 0,
  type: "value",
  nameLocation: "end",
  nameGap: 15,
  inverse: false,
  // scale :false,
  // splitNumber: 5,
  // minInterval: 0,
  // logBase: 10,
  silent: false,
  triggerEvent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicInOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
  zlevel: 0,
  z: 0,
};

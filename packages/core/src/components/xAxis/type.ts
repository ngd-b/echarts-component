import type { XAXisOption } from "echarts/types/dist/shared";

export type { XAXisOption };
export type XAxis = Partial<
  Omit<
    XAXisOption,
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

export const DefaultXAxis: XAxis = {
  show: true,
  gridIndex: 0,
  // alignTicks:false,
  offset: 0,
  type: "category",
  nameLocation: "end",
  nameGap: 15,
  inverse: false,
  // scale :false,
  //splitNumber: 5,
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

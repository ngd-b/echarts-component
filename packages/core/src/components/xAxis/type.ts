import type { XAXisOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

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
  // alignTicks: false,
  offset: 0,
  type: "category",
  nameLocation: "end",
  nameGap: 15,
  inverse: false,
  // scale: false,
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

export const DefaultNameTextStyleOptions: AxisNameTextStyleOption = {
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 12,
  backgroundColor: "transparent",
  borderWidth: 0,
  borderType: "solid",
  borderDashOffset: 0,
  borderRadius: 0,
  padding: 0,
  shadowColor: "transparent",
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textBorderType: "solid",
  textBorderDashOffset: 0,
  textShadowColor: "transparent",
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
  // overflow: "none",
  // ellipsis: "...",
};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
  //interval: "auto",
  //inside: false,
  rotate: 0,
  // margin: 8,
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 12,
  backgroundColor: "transparent",
  borderWidth: 0,
  borderType: "solid",
  borderDashOffset: 0,
  borderRadius: 0,
  padding: 0,
  shadowColor: "transparent",
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textBorderType: "solid",
  textBorderDashOffset: 0,
  textShadowColor: "transparent",
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
  // overflow: "none",
  // ellipsis: "...",
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  nameTextStyle: DefaultNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};

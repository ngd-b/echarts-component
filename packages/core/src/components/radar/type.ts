import type { RadarOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type { RadarOption };
export type TextType = "axisName" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type Radar = Partial<
  Omit<
    RadarOption,
    | "axisName"
    | "axisLine"
    | "axisTick"
    | "axisLabel"
    | "splitLine"
    | "splitArea"
  >
>;

export const DefaultRadar: Radar = {
  zlevel: 0,
  z: 0,
  center: ["50%", "50%"],
  radius: "75%",
  // coordinateSystem: "none",
  // coordinateSystemUsage:"box",
  // calendarIndex:0,
  // matrixIndex:0,
  startAngle: 90,
  axisNameGap: 15,
  splitNumber: 5,
  shape: "polygon",
  scale: false,
  // silent:false,
  triggerEvent: false,
  // jitter:0,
  // jitterOverlap:true,
  // jitterMargin:2
};

export const DefaultAxisNameTextStyleOptions: AxisNameTextStyleOption = {
  color: "#333",
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
  // richInheritPlainLabel:rue
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
  axisName: DefaultAxisNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};

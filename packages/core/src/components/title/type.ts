import type { TitleOption as TitleComponentOption } from "echarts/types/dist/shared.d.ts";
import { TextCommonOption } from "../common/type";

export type { TitleComponentOption };

export type TextType = "textStyle" | "subtextStyle";
export type TextOptions = TextCommonOption;

export type TitleOptions = Partial<
  Omit<TitleComponentOption, "textStyle" | "subtextStyle">
>;

export const DefaultTitleOptions: TitleOptions = {
  show: false,
  text: "",
  link: "",
  target: "blank",
  subtext: "",
  sublink: "",
  subtarget: "blank",
  //textAlign: "auto",                  // 类型枚举值中没有auto？
  // textVerticalAlign: "auto",
  triggerEvent: false,
  padding: 5,
  itemGap: 10,
  zlevel: 0,
  z: 2,
  left: "auto",
  top: "auto",
  right: "auto",
  bottom: "auto",
  backgroundColor: "transparent",
  borderColor: "#ccc",
  borderWidth: 0,
  borderRadius: 0,

  // shadowOffsetX: 0,     // 类型枚举值中没有shadowOffsetX？
  // shadowOffsetY: 0,
};

export const DefaultTextStyleOptions: TextOptions = {
  color: "#333",
  fontStyle: "normal",
  fontWeight: "bolder",
  fontFamily: "sans-serif",
  fontSize: 18,
  lineHeight: 20,
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
  textStyle: DefaultTextStyleOptions,
  subtextStyle: DefaultTextStyleOptions,
};

import type { TitleOption as TitleComponentOption } from "echarts/types/dist/shared.d.ts";

export type { TitleComponentOption };
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

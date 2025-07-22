import type { LegendComponentOption } from "echarts/components";
import { TextCommonOption } from "../common/type";

export type { LegendComponentOption };
export type TextType = "textStyle" | "pageTextStyle";
export type TextOptions = TextCommonOption;

export type LegendOptions = Partial<
  Omit<
    LegendComponentOption,
    | "itemStyle"
    | "lineStyle"
    | "textStyle"
    | "tooltip"
    | "formatter"
    | "selected"
    | "scrollDataIndex"
    | "pageButtonItemGap"
    | "pageButtonGap"
    | "pageButtonPosition"
    | "pageFormatter"
    | "pageIcons"
    | "pageIconColor"
    | "pageIconInactiveColor"
    | "pageIconSize"
    | "pageTextStyle"
    | "emphasis"
    | "selectorLabel"
  >
>;

export const DefaultLegendOptions: LegendOptions = {
  show: true,
  type: "plain",
  zlevel: 0,
  z: 2,
  left: "auto",
  top: "auto",
  right: "auto",
  bottom: "auto",
  width: "auto",
  height: "auto",
  orient: "horizontal",
  align: "auto",
  padding: 5,
  itemGap: 10,
  itemWidth: 25,
  itemHeight: 14,
  symbolRotate: "inherit",
  selectedMode: true,
  inactiveColor: "#ccc",
  inactiveBorderColor: "#ccc",
  inactiveBorderWidth: "auto",
  backgroundColor: "transparent",
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 0,

  // shadowOffsetX: 0,     // 类型枚举值中没有shadowOffsetX？
  // shadowOffsetY: 0,
  // animationDurationUpdate: 800,
  selector: false,
  selectorPosition: "auto",
  selectorItemGap: 7,
  selectorButtonGap: 10,
};

export const DefaultTextStyleOptions: TextCommonOption = {
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
};
export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
  pageTextStyle: DefaultTextStyleOptions,
};

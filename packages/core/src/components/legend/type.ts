import type { LegendComponentOption } from "echarts/components";

export type { LegendComponentOption };
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

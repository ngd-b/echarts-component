import type { TooltipOption as TooltipComponentOption } from "echarts/types/dist/shared.js";
import { TextOptions } from "../common/type";

export type { TooltipComponentOption };

export type TextType = "textStyle";

export type TooltipOptions = Partial<
  Omit<TooltipComponentOption, "axisPointer" | "formatter" | "textStyle">
>;

export const DefaultTooltipOptions: TooltipOptions = {
  show: true,
  trigger: "item",
  showContent: true,
  alwaysShowContent: false,
  triggerOn: "mousemove|click",
  showDelay: 0,
  hideDelay: 100,
  enterable: false,
  renderMode: "html",
  confine: false,
  appendToBody: false,
  transitionDuration: 0.4,
  backgroundColor: "rgba(50,50,50,0.7)",
  borderColor: "#333",
  borderWidth: 0,
  padding: 5,
  order: "seriesAsc",
};

export const DefaultTextStyleOptions: TextOptions = {
  color: "#fff",
  fontStyle: "normal",
  fontWeight: "bolder",
  fontFamily: "sans-serif",
  fontSize: 14,

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
};

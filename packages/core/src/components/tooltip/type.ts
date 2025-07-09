import type { TooltipOption as TooltipComponentOption } from "echarts/types/dist/shared.js";

export type { TooltipComponentOption };
export type TooltipOptions = Partial<
  Omit<TooltipComponentOption, "axisPointer" | "formatter">
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

import type { TooltipOption as TooltipComponentOption } from "echarts/types/dist/shared.js";

export type { TooltipComponentOption };

export type TextType = "textStyle";

export type TooltipOptions = Partial<
  Omit<TooltipComponentOption, "axisPointer" | "textStyle">
>;

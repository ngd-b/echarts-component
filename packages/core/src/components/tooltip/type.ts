import type { TooltipOption as TooltipComponentOption } from "echarts/types/dist/shared.js";
import { TextOptions } from "../common/type";

export type { TooltipComponentOption };

export type TextType = "textStyle";

export type TooltipOptions = Partial<
  Omit<TooltipComponentOption, "axisPointer" | "formatter" | "textStyle">
>;

export const DefaultTooltipOptions: TooltipOptions = {
  show: true,
  showContent: true,
};

export const DefaultTextStyleOptions: TextOptions = {};

export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
};

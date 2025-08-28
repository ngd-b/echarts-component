import type { TooltipOption as TooltipComponentOption } from "echarts/types/dist/shared.js";
import { TextOptions } from "../common/type";

export type { TooltipComponentOption };

export type TextType = "textStyle";

export type TooltipOptions = Partial<
  Omit<TooltipComponentOption, "axisPointer" | "textStyle">
>;

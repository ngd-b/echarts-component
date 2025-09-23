import type { TitleOption as TitleComponentOption } from "echarts/types/dist/shared.d.ts";

export type { TitleComponentOption };

export type TextType = "textStyle" | "subtextStyle";

export type TitleOptions = Partial<
  Omit<TitleComponentOption, "textStyle" | "subtextStyle">
>;

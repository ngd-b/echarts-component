import type { TitleOption as TitleComponentOption } from "echarts/types/dist/shared.d.ts";
import { TextCommonOption } from "../common/type";

export type { TitleComponentOption };

export type TextType = "textStyle" | "subtextStyle";
export type TextOptions = TextCommonOption;

export type TitleOptions = Partial<
  Omit<TitleComponentOption, "textStyle" | "subtextStyle">
>;

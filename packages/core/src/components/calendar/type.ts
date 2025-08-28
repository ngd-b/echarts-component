import type { CalendarOption as CalendarComponentOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "dayLabel" | "monthLabel" | "yearLabel";
export type TextOptions = LabelOption;

export type { CalendarComponentOption };

export type CalendarOption = Partial<
  Omit<
    CalendarComponentOption,
    "splitLine" | "itemStyle" | "dayLabel" | "monthLabel" | "yearLabel"
  >
>;

import type { CalendarOption as CalendarComponentOption } from "echarts/types/dist/shared";

export type TextType = "dayLabel" | "monthLabel" | "yearLabel";

export type { CalendarComponentOption };

export type CalendarOption = Partial<
  Omit<
    CalendarComponentOption,
    "splitLine" | "itemStyle" | "dayLabel" | "monthLabel" | "yearLabel"
  >
>;

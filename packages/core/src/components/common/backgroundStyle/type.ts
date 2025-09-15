import type { ItemStyleOption as ItemStyleComponentOption } from "echarts/types/dist/shared";

export type BackgroundStyleOption = ItemStyleComponentOption & {
  borderRadius?: number | number[];
};

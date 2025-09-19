import type {
  ItemStyleOption as ItemStyleComponentOption,
  ZRColor,
} from "echarts/types/dist/shared";

export type ItemStyleOption = ItemStyleComponentOption & {
  areaColor?: ZRColor;
};

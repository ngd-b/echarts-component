import { ThumbnailComponentOption } from "echarts/types/dist/echarts";

export { ThumbnailComponentOption };

export type ThumbnailOption = Partial<
  Omit<ThumbnailComponentOption, "itemStyle" | "windowStyle">
>;

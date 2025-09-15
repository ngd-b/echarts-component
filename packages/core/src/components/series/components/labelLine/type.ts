import type { LabelLineOption as LabelLineComponentOption } from "echarts/types/dist/shared";

export { LabelLineComponentOption };

export type LabelLineOption = Partial<
  Omit<LabelLineComponentOption, "lineStyle">
>;

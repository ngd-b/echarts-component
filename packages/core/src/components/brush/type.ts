import type { BrushOption as BrushComponentOption } from "echarts/types/dist/shared";

export type { BrushComponentOption };

export type BrushOption = Partial<BrushComponentOption>;

export const DefaultBrushOption: BrushOption = {
  transformable: true,
  removeOnClick: true,
};

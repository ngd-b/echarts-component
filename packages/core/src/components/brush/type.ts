import type { BrushOption } from "echarts/types/dist/shared";

export type { BrushOption };

export type Brush = Partial<BrushOption>;

export const DefaultBrush: Brush = {
  transformable: true,
  removeOnClick: true,
};

import type { BrushOption as BrushComponentOption } from "echarts/types/dist/shared";

export type { BrushComponentOption };

export type BrushOption = Partial<Omit<BrushComponentOption, "brushStyle">>;

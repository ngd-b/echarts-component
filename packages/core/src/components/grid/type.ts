import type { GridOption as GridComponentOption } from "echarts/types/dist/shared.d.ts";

export type { GridComponentOption };
export type GridOptions = Partial<Omit<GridComponentOption, "tooltip">>;

export const DefaultGridOptions: GridOptions = {};

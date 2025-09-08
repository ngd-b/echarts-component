import type { InsideDataZoomOption as InsideDataZoomComponentOption } from "echarts/types/dist/shared.d.ts";

export type { InsideDataZoomComponentOption };
export type InsideDataZoomOption = Partial<
  Omit<InsideDataZoomComponentOption, "type">
>;

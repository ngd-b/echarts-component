import type { InsideDataZoomOption } from "echarts/types/dist/shared.d.ts";

export type { InsideDataZoomOption };
export type InsideDataZoom = Partial<Omit<InsideDataZoomOption, "type">>;

import type { PointerOption as PointerComponentOption } from "echarts/types/dist/shared";

export { PointerComponentOption };
export type PointerOption = Partial<Omit<PointerComponentOption, "itemStyle">>;

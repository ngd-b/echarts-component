import type { GridComponentOption } from "echarts/components.d.ts";

export type { GridComponentOption };
export type GridOptions = Partial<Omit<GridComponentOption, "tooltip">>;

export const DefaultGridOptions: GridOptions = {
  show: false,
  zlevel: 0,
  z: 2,
  left: "10%",
  top: 60,
  right: "10%",
  bottom: 60,
  width: "auto",
  height: "auto",
  containLabel: false,
  backgroundColor: "transparent",
  borderColor: "#ccc",
  borderWidth: 1,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};

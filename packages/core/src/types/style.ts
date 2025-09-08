import {
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  HandleStyleOption,
} from "../components/type";

export type StyleType =
  | "lineStyle"
  | "areaStyle"
  | "itemStyle"
  | "shadowStyle"
  | "handle"
  | "iconStyle"
  | "handleStyle"
  | "moveHandleStyle"
  | "brushStyle";

export type StyleTypeMap = {
  lineStyle: LineStyleOption;
  areaStyle: AreaStyleOption;
  itemStyle: ItemStyleOption;
  shadowStyle: AreaStyleOption;
  handle: HandleStyleOption;
  iconStyle: ItemStyleOption;
  handleStyle: ItemStyleOption;
  moveHandleStyle: ItemStyleOption;
  brushStyle: ItemStyleOption;
};

export type StyleTypeOption =
  | LineStyleOption
  | AreaStyleOption
  | ItemStyleOption
  | HandleStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

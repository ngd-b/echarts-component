import {
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  HandleStyleOption,
  ShadowStyleOption,
  IcontyleOption,
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
  | "brushStyle"
  | "indicatorStyle";

export type StyleTypeMap = {
  lineStyle: LineStyleOption;
  areaStyle: AreaStyleOption;
  itemStyle: ItemStyleOption;
  shadowStyle: ShadowStyleOption;
  handle: HandleStyleOption;
  iconStyle: IcontyleOption;
  handleStyle: ItemStyleOption;
  moveHandleStyle: ItemStyleOption;
  brushStyle: ItemStyleOption;
  indicatorStyle: ItemStyleOption;
};

export type StyleTypeOption =
  | LineStyleOption
  | AreaStyleOption
  | ItemStyleOption
  | HandleStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

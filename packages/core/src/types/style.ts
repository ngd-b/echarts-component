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
  | "handle";

export type StyleTypeMap = {
  lineStyle: LineStyleOption;
  areaStyle: AreaStyleOption;
  itemStyle: ItemStyleOption;
  shadowStyle: AreaStyleOption;
  handle: HandleStyleOption;
};

export type StyleTypeOption =
  | LineStyleOption
  | AreaStyleOption
  | ItemStyleOption
  | HandleStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

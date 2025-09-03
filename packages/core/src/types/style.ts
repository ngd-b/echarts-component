import {
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
} from "../components/type";

export type StyleType = "lineStyle" | "areaStyle" | "itemStyle" | "shadowStyle";

export type StyleTypeMap = {
  lineStyle: LineStyleOption;
  areaStyle: AreaStyleOption;
  itemStyle: ItemStyleOption;
  shadowStyle: AreaStyleOption;
};

export type StyleTypeOption =
  | LineStyleOption
  | AreaStyleOption
  | ItemStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

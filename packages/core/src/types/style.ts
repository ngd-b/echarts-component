import {
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  HandleStyleOption,
  ShadowStyleOption,
  IcontyleOption,
  BackgroundStyleOption,
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
  | "indicatorStyle"
  | "backgroundStyle";

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
  backgroundStyle: BackgroundStyleOption;
};

export type StyleTypeOption =
  | LineStyleOption
  | AreaStyleOption
  | ItemStyleOption
  | HandleStyleOption
  | IcontyleOption
  | BackgroundStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

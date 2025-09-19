import {
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  HandleStyleOption,
  ShadowStyleOption,
  IcontyleOption,
  BackgroundStyleOption,
  ProgressComponentOption,
  EmptyCircleStyleOption,
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
  | "backgroundStyle"
  | "progress"
  | "emptyCircleStyle"
  | "dividerLineStyle"
  | "windowStyle";

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
  progress: ProgressComponentOption;
  emptyCircleStyle: EmptyCircleStyleOption;
  dividerLineStyle: LineStyleOption;
  windowStyle: ItemStyleOption;
};

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

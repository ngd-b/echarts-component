import { LineStyleOption, AreaStyleOption } from "../components/type";

export type StyleType = "lineStyle" | "areaStyle";

export type StyleTypeMap = {
  lineStyle: LineStyleOption;
  areaStyle: AreaStyleOption;
};

export type StyleTypeOption = LineStyleOption | AreaStyleOption;

export interface StyleContext {
  update: <K extends StyleType>(name: K, data: StyleTypeMap[K]) => void;
}

import {
  GraphicComponentTextOption,
  GraphicElementStyleOption,
  GraphicElementTextConfigOption,
  GraphicElementShapeOption,
  GraphicElementLeaveToOption,
  GraphicElementEnterFromOption,
} from "../components/type";

export type ElementStyleType =
  | "enterFrom"
  | "leaveTo"
  | "textContent"
  | "textConfig"
  | "shape"
  | "style";

export type ElementStyleTypeMap = {
  enterFrom: GraphicElementEnterFromOption;
  leaveTo: GraphicElementLeaveToOption;
  textContent: GraphicComponentTextOption;
  textConfig: GraphicElementTextConfigOption;
  shape: GraphicElementShapeOption;
  style: GraphicElementStyleOption;
};

export interface ElementStyleContext {
  update: <K extends ElementStyleType>(
    name: K,
    data: ElementStyleTypeMap[K]
  ) => void;
}

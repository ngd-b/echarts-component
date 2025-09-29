import type {
  GraphicComponentGroupOption as _GraphicComponentGroupOption,
  GraphicComponentImageOption,
  GraphicComponentTextOption,
  GraphicComponentZRPathOption,
  ElementTextConfig as GraphicElementTextConfigOption,
  ImageStyleProps,
  PathStyleProps,
  TextStyleProps,
  TransitionOptionMixin,
  ImageProps,
  PathProps,
  GroupProps,
  TextProps,
} from "echarts/types/dist/shared.d.ts";

type GraphicComponentGroupOption = Omit<
  _GraphicComponentGroupOption,
  "children"
> & {
  children: GraphicComponentOption;
};

export {
  GraphicComponentGroupOption,
  GraphicComponentImageOption,
  GraphicComponentTextOption,
  GraphicComponentZRPathOption,
  GraphicElementTextConfigOption,
};
export type GraphicElementComponentOption =
  | GraphicComponentGroupOption
  | GraphicComponentImageOption
  | GraphicComponentTextOption
  | GraphicComponentZRPathOption;

export type GraphicComponentOption = GraphicElementComponentOption[];

export type GraphicOption = GraphicComponentOption;

export const GRAPHIC_EVENT_TYPES = [
  "click",
  "dblclick",
  "mousemove",
  // "mouseover",
  "mouseout",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "dragstart",
  "dragend",
  "dragenter",
  "dragover",
  "dragleave",
  "drop",
  "drag",
] as const;

// export type GraphicElementEventType = (typeof GRAPHIC_EVENT_TYPES)[number];
export type GraphicElementEventType =
  | "click"
  | "dblclick"
  | "mousemove"
  | "mouseout"
  | "mouseover"
  | "mouseup"
  | "mousedown"
  | "contextmenu"
  | "mousewheel"
  | "dragstart"
  | "dragend"
  | "dragenter"
  | "dragover"
  | "dragleave"
  | "drop"
  | "drag";

type GraphicElementFilterOption<T> = Partial<
  Omit<
    T,
    | "enterFrom"
    | "leaveTo"
    | "textContent"
    | "textConfig"
    | `on${GraphicElementEventType}`
  >
>;

export type GraphicGroupOption = Omit<
  GraphicElementFilterOption<GraphicComponentGroupOption>,
  "children"
>;

export type GraphicImageOption = Omit<
  GraphicElementFilterOption<GraphicComponentImageOption>,
  "style"
>;

export type GraphicTextOption = Omit<
  GraphicElementFilterOption<GraphicComponentTextOption>,
  "style"
>;

export type GraphicZRPathOption = Omit<
  GraphicElementFilterOption<GraphicComponentZRPathOption>,
  "shape" | "style"
>;

type GraphicComponentImageStyleOption = ImageStyleProps &
  TransitionOptionMixin<ImageStyleProps>;

type GraphicComponentTextStyleOption = TextStyleProps &
  TransitionOptionMixin<TextStyleProps>;

type GraphicComponentZRPathStyleOption = PathStyleProps &
  TransitionOptionMixin<PathStyleProps>;

export type GraphicElementStyleOption =
  | GraphicComponentImageStyleOption
  | GraphicComponentTextStyleOption
  | GraphicComponentZRPathStyleOption;

type GraphicElementShapeRectOption = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  r?: number | number[] | string;
  transition?: string | string[];
};
type GraphicElementShapeRingOption = {
  cx?: number;
  cy?: number;
  r?: number;
  r0?: number;
  transition?: string | string[];
};
type GraphicElementShapeSectorOption = {
  cx?: number;
  cy?: number;
  r?: number;
  r0?: number;
  startAngle?: number;
  endAngle?: number;
  clockwise?: boolean;
  transition?: string | string[];
};
type GraphicElementShapeCircleOption = {
  cx?: number;
  cy?: number;
  r?: number;
  transition?: string | string[];
};

type GraphicElementShapePolygonOption = {
  points?: number[][];
  smooth?: boolean | string;
  smoothConstraint?: boolean;
  transition?: string | string[];
};
type GraphicElementShapeLineOption = {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  percent?: number;
  transition?: string | string[];
};
type GraphicElementShapeCompoundPathOption = {
  paths:
    | GraphicElementShapeLineOption
    | GraphicElementShapePolygonOption
    | GraphicElementShapeCircleOption
    | GraphicElementShapeSectorOption
    | GraphicElementShapeRingOption
    | GraphicElementShapeRectOption
    | GraphicElementShapeBezieCurveOption;
  transition?: string | string[];
};

type GraphicElementShapeBezieCurveOption = {
  y1?: number;
  x2?: number;
  y2?: number;
  cpx1?: number;
  cpy1?: number;
  cpx2?: number;
  cpy2?: number;
  percent?: number;
  transition?: string | string[];
};
export type GraphicElementShapeOption =
  | GraphicElementShapeLineOption
  | GraphicElementShapePolygonOption
  | GraphicElementShapeCircleOption
  | GraphicElementShapeSectorOption
  | GraphicElementShapeRingOption
  | GraphicElementShapeRectOption
  | GraphicElementShapeBezieCurveOption
  | GraphicElementShapeCompoundPathOption;

export type GraphicElementLeaveToOption =
  | ImageProps
  | PathProps
  | GroupProps
  | TextProps;

export type GraphicElementEnterFromOption =
  | ImageProps
  | PathProps
  | GroupProps
  | TextProps;

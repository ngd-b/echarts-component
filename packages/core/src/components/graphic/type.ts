import type {
  GraphicComponentGroupOption as _GraphicComponentGroupOption,
  GraphicComponentImageOption,
  GraphicComponentTextOption,
  GraphicComponentZRPathOption,
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

export type GraphicElementEventType = (typeof GRAPHIC_EVENT_TYPES)[number];

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

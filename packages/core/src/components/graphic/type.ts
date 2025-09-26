import type {
  GraphicComponentGroupOption,
  GraphicComponentImageOption,
  GraphicComponentTextOption,
  GraphicComponentZRPathOption,
} from "echarts/types/dist/shared.d.ts";

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

type GraphicElementFilterOption<T> = Partial<
  Omit<
    T,
    | "enterFrom"
    | "leaveTo"
    | "textContent"
    | "textConfig"
    | "onclick"
    | "ondblclick"
    | "onmousewheel"
    | "onmouseout"
    | "onmouseup"
    | "onmousedown"
    | "onmousemove"
    | "oncontextmenu"
    | "ondrag"
    | "ondragstart"
    | "ondragend"
    | "ondragenter"
    | "ondragleave"
    | "ondragover"
    | "ondrop"
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

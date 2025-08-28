import { TextOptions } from "../components/common/type";

export type TextType =
  | "textStyle"
  | "subtextStyle"
  | "pageTextStyle"
  | "nameTextStyle"
  | "axisLabel"
  | "axisName"
  | "label"
  | "dayLabel"
  | "monthLabel"
  | "yearLabel"
  | "selectorLabel";

export interface TextContext<T extends TextType = TextType> {
  updateTextStyle: (name: T, data: TextOptions) => void;
}

import { TextCommonOption } from "@/components/common/type";

export type TextType = "textStyle" | "subtextStyle" | "pageTextStyle";

export interface TextContext<T extends TextType = TextType> {
  updateTextStyle: (name: T, data: TextCommonOption) => void;
}

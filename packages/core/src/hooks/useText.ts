import { TextContext } from "@/types/text";
import { inject } from "vue";

export const ECHARTS_TEXT_KEY = Symbol("vue-echarts-text");

export function useText() {
  let textOptions = inject<TextContext>(ECHARTS_TEXT_KEY);

  if (!textOptions) {
    throw new Error(
      "[Vue Echarts]: useTitle() can only be used inside setup() or functional components."
    );
  }
  return textOptions;
}

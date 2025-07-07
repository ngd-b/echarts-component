import { inject } from "vue";
import type { EchartsContext } from "../types";

export const ECHARTS_CONTEXT_KEY = Symbol("vue-echarts");

export function useVueEcharts() {
  const ctx = inject<EchartsContext>(ECHARTS_CONTEXT_KEY);

  if (!ctx) {
    throw new Error(
      "[Vue Echarts]: useVueEcharts() can only be used inside setup() or functional components."
    );
  }

  return ctx;
}

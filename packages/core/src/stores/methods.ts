import type { EchartsState, Methods } from "../types";

const Methods = [
  "setOption",
  "getWidth",
  "getHeight",
  "getOption",
  "resize",
] as const;

export const userMethods = (state: EchartsState): Methods => {
  const setOption: Methods["setOption"] = (option, arg2, arg3) => {
    if (!state.vueEchartsRef.value) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    if (typeof arg2 === "object" || typeof arg2 === "undefined") {
      state.vueEchartsRef.value.setOption(option, arg2);
    } else {
      state.vueEchartsRef.value.setOption(option, arg2, arg3);
    }
  };

  const getWidth: Methods["getWidth"] = () => {
    if (!state.vueEchartsRef.value) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    return state.vueEchartsRef.value.getWidth();
  };

  const getHeight: Methods["getHeight"] = () => {
    if (!state.vueEchartsRef.value) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    return state.vueEchartsRef.value.getHeight();
  };

  const getOption: Methods["getOption"] = () => {
    if (!state.vueEchartsRef.value) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    return state.vueEchartsRef.value.getOption();
  };

  const resize: Methods["resize"] = (opts) => {
    if (!state.vueEchartsRef.value) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    state.vueEchartsRef.value.resize(opts);
  };

  return {
    setOption,
    getWidth,
    getHeight,
    getOption,
    resize,
  };
};

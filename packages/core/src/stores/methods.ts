import type { EchartsState, Methods } from "../types";

const Methods = [
  "setOption",
  "getWidth",
  "getHeight",
  "getOption",
  "resize",
  "getDom",

  "clear",
  "dispose",
  "isDisposed",

  "renderToSVGString",
  "convertFromPixel",
  "convertToPixel",
  "showLoading",
  "hideLoading",

  "appendData",
  "getDataURL",
  "getConnectedDataURL",
] as const;

type MethodName = (typeof Methods)[number];
type MethodParam<T> = T extends (...args: infer P) => any ? P : never;

export const userMethods = (state: EchartsState): Methods => {
  /**
   * 通用调用图标方法
   */
  function callMethod<N extends MethodName>(name: N) {
    return (...args: MethodParam<Methods[N]>): ReturnType<Methods[N]> => {
      if (!state.vueEchartsRef.value) {
        throw new Error("[Vue Echarts]: echarts instance is not ready.");
      }

      return (state.vueEchartsRef.value[name] as any)(...args);
    };
  }

  return {
    setOption: callMethod("setOption"),
    getWidth: callMethod("getWidth"),
    getHeight: callMethod("getHeight"),
    getDom: callMethod("getDom"),
    getOption: callMethod("getOption"),
    resize: callMethod("resize"),

    clear: callMethod("clear"),
    dispose: callMethod("dispose"),
    isDisposed: callMethod("isDisposed"),

    renderToSVGString: callMethod("renderToSVGString"),
    convertFromPixel: callMethod("convertFromPixel"),
    convertToPixel: callMethod("convertToPixel"),
    showLoading: callMethod("showLoading"),
    hideLoading: callMethod("hideLoading"),

    appendData: callMethod("appendData"),
    getDataURL: callMethod("getDataURL"),
    getConnectedDataURL: callMethod("getConnectedDataURL"),
  };
};

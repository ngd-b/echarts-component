import { getCurrentInstance, inject, provide, Ref } from "vue";
import {
  GraphicContext,
  GraphicElementOption,
  GraphicOptionType,
} from "../types";

export const ECHARTS_GRAPHIC_KEY = Symbol("ECHARTS_GRAPHIC_KEY");

interface UseGraphicOptions<O> {
  options: Ref<O>;
  update: (data: O) => void;
}
export function useGraphic<O extends GraphicOptionType>(
  config?: Partial<UseGraphicOptions<O>>
) {
  const injectionState = inject<GraphicContext | null>(
    ECHARTS_GRAPHIC_KEY,
    null
  );
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useGraphic() requires options and update function."
    );
  }
  const { options, update } = config;

  /**
   * 更新配置
   * @param name
   * @param data
   */
  const updateGraphic = (data: GraphicElementOption) => {
    let index = options.value.findIndex((item) => item.id === data.id);

    if (index > -1) {
      options.value[index] = data;
    } else {
      options.value.push(data);
    }

    update(options.value);
  };

  // 提供消费
  const ctx: GraphicContext = {
    update: updateGraphic,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<GraphicContext>(ECHARTS_GRAPHIC_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useGraphic() is called outside of a component setup()."
    );
  }
  return ctx;
}

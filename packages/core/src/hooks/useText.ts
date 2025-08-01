import { getCurrentInstance, inject, provide, Ref } from "vue";
import { TextType, TextContext } from "../types";
import { TextOptions } from "../components/common/type";
import { UpdateOption } from "../types";

export const ECHARTS_TEXT_KEY = Symbol("vue-echarts-text");

interface UseTextOptions<O, E> {
  options: Ref<O>;
  update: (data: O) => void;
  defaultTextOptions: (name?: E) => TextOptions;
}
export function useText<O extends UpdateOption, E extends TextType>(
  config?: Partial<UseTextOptions<O, E>>
): TextContext<E> {
  const injectionState = inject<TextContext | null>(ECHARTS_TEXT_KEY, null);
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useTitle() requires options and update function."
    );
  }
  const { options, update, defaultTextOptions } = config;

  /**
   * 更新text配置
   * @param name
   * @param data
   */
  const updateTextStyle = <T extends E = E>(name: T, data: TextOptions) => {
    (options.value as Record<E, TextOptions>)[name] = {
      ...defaultTextOptions!(name),
      ...data,
    };
    update(options.value);
  };

  // 提供消费
  const ctx: TextContext<E> = {
    defaultTextProps: defaultTextOptions,
    updateTextStyle,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<TextContext<E>>(ECHARTS_TEXT_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useVueEcharts() is called outside of a component setup()."
    );
  }
  return ctx;
}

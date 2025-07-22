import { inject, provide, Ref } from "vue";
import { TextType, TextContext } from "../types";
import { TextOptions } from "@/components/common/type";
import { UpdateOption } from "@/types";

export const ECHARTS_TEXT_KEY = Symbol("vue-echarts-text");

interface UseTextOptions<O, E> {
  options: Ref<O>;
  update: (data: O) => void;
  defaultTextOptions: (name?: E) => TextOptions;
}
export function useText<O extends UpdateOption, E extends TextType>(
  config?: Partial<UseTextOptions<O, E>>
): TextContext<E> | null {
  if (!config) {
    return inject<TextContext>(ECHARTS_TEXT_KEY) ?? null;
  }
  const { options, update, defaultTextOptions } = config;

  if (!options || !update) {
    throw new Error(
      "[Vue Echarts]: useTitle() requires options and update function."
    );
  }

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
  provide<TextContext<E>>(ECHARTS_TEXT_KEY, {
    defaultTextProps: defaultTextOptions,
    updateTextStyle,
  });

  return null;
}

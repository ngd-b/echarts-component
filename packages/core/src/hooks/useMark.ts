import { getCurrentInstance, inject, provide, Ref } from "vue";
import { MarkContext, MarkType, MarkTypeMap } from "../types";

export const ECHARTS_MARK_KEY = Symbol("ECHARTS_MARK_KEY");

interface UseMarkOptions<O> {
  options: Ref<O>;
  update: (data: O) => void;
}
export function useMark<O>(config?: Partial<UseMarkOptions<O>>): MarkContext {
  const injectionState = inject<MarkContext | null>(ECHARTS_MARK_KEY, null);
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useMark() requires options and update function."
    );
  }
  const { options, update } = config;

  /**
   * 更新配置
   * @param name
   * @param data
   */
  const updateMark = <T extends MarkType = MarkType>(
    name: T,
    data: MarkTypeMap[T]
  ) => {
    (options.value as Record<T, MarkTypeMap[T]>)[name] = {
      ...data,
    };
    update(options.value);
  };

  // 提供消费
  const ctx: MarkContext = {
    updateMark,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<MarkContext>(ECHARTS_MARK_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useMark() is called outside of a component setup()."
    );
  }
  return ctx;
}

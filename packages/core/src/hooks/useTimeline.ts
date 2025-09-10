import { getCurrentInstance, inject, provide, Ref } from "vue";
import type {
  TimelineContext,
  TimelineType,
  TimelineTypeMap,
  TimelineTypeOption,
} from "../types";

export const ECHARTS_TIMELINE_KEY = Symbol("ECHARTS_TIMELINE_KEY");

interface UseTimelineOptions<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export function useTimeline<T>(config?: Partial<UseTimelineOptions<T>>) {
  const injectionState = inject<TimelineContext | null>(
    ECHARTS_TIMELINE_KEY,
    null
  );
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useTimeline() requires options and update function."
    );
  }
  const { options, update } = config;

  /**
   * 更新text配置
   * @param name
   * @param data
   */
  const updateTimeline = <T extends TimelineType>(
    name: T,
    data: TimelineTypeMap[T]
  ) => {
    (options.value as Record<TimelineType, TimelineTypeOption>)[name] = {
      ...data,
    };
    update(options.value);
  };

  // 提供消费
  const ctx: TimelineContext = {
    update: updateTimeline,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<TimelineContext>(ECHARTS_TIMELINE_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useTimeline() is called outside of a component setup()."
    );
  }
  return ctx;
}

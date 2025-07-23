import {
  AxisOption,
  LineStyleOption,
  ZRColor,
  AreaStyleOption,
} from "../components/type";
import { AxisContext, AxisType } from "../types";
import { inject, provide, Ref } from "vue";

export const ECHARTS_AXIS_KEY = Symbol("vue-echarts-axis");

interface UseAxisOptions<O> {
  options: Ref<O>;
  defaultAxisLineStyle: LineStyleOption<ZRColor | ZRColor[]>;
  defaultAxisAreaStyle: AreaStyleOption<ZRColor | ZRColor[]>;
  update: (data: O) => void;
}
export const useAxis = <O>(config?: Partial<UseAxisOptions<O>>) => {
  if (!config) {
    let ctx = inject<AxisContext>(ECHARTS_AXIS_KEY);
    if (!ctx) {
      throw new Error(
        "[Vue Echarts]: useAxis only used within a XAxis and YAxis context."
      );
    }
    return ctx;
  }

  const { options, update, defaultAxisLineStyle, defaultAxisAreaStyle } =
    config;

  if (!options || !update) {
    throw new Error(
      "[Vue Echarts]: useAxis() requires options and update function."
    );
  }

  /**
   * 更新axis配置
   * @param name
   * @param data
   */
  const updateAxisStyle = (name: AxisType, data: AxisOption) => {
    (options.value as Record<AxisType, AxisOption>)[name] = data;
    update(options.value);
  };

  /**
   * 更新lineStyle
   * @param data
   */
  const updateAxisLineStyle = (data: LineStyleOption<ZRColor | ZRColor[]>) => {
    (
      options.value as { lineStyle: LineStyleOption<ZRColor | ZRColor[]> }
    ).lineStyle = data;
    update(options.value);
  };

  /**
   * 更新areaStyle
   * @param data
   */
  const updateAxisAreaStyle = (data: AreaStyleOption<ZRColor | ZRColor[]>) => {
    (
      options.value as { areaStyle: AreaStyleOption<ZRColor | ZRColor[]> }
    ).areaStyle = data;
    update(options.value);
  };
  // 提供消费
  provide<AxisContext>(ECHARTS_AXIS_KEY, {
    defaultAxisLineStyle,
    defaultAxisAreaStyle,
    updateAxisStyle,
    updateAxisLineStyle,
    updateAxisAreaStyle,
  });

  return null;
};

/**
 * 复用AxisPointer组件作用子组件
 */
import { getCurrentInstance, inject, provide, Ref } from "vue";
import { AxisPointerComponentOption } from "../components/type";
import { AxisPointerContext } from "../types/index";

export const ECHARTS_AXIS_POINTER_KEY = Symbol("ECHARTS_AXIS_POINTER_KEY");

interface AxisPointerOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useAxisPointer = <T>(config?: AxisPointerOption<T>) => {
  const injectCtx = inject<AxisPointerContext | null>(
    ECHARTS_AXIS_POINTER_KEY,
    null
  );

  if (!config || !config.options || !config.update) {
    return injectCtx;
  }
  const { options, update } = config;

  function updateAxisPointer(data: AxisPointerComponentOption) {
    (
      options.value as Record<"axisPointer", AxisPointerComponentOption>
    ).axisPointer = data;
    update(options.value);
  }

  const ctx: AxisPointerContext = {
    update: updateAxisPointer,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<AxisPointerContext>(ECHARTS_AXIS_POINTER_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useAxisPointer() is called outside of a component setup()."
    );
  }

  return ctx;
};

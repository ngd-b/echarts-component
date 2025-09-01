/**
 * 复用toolitp组件作用子组件
 */
import { getCurrentInstance, inject, provide, Ref } from "vue";
import { TooltipComponentOption } from "../components/type";
import { TooltipContext } from "../types/index";

export const ECHARTS_TOOLTIP_KEY = "ECHARTS_TOOLTIP_KEY";

interface TooltipOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useTooltip = <T>(config?: TooltipOption<T>) => {
  const injectCtx = inject<TooltipContext | null>(ECHARTS_TOOLTIP_KEY, null);

  if (!config || !config.options || !config.update) {
    return injectCtx;
  }
  const { options, update } = config;

  function updateTooltip(data: TooltipComponentOption) {
    (options.value as Record<"tooltip", TooltipComponentOption>).tooltip = data;
    update(options.value);
  }

  const ctx: TooltipContext = {
    update: updateTooltip,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<TooltipContext>(ECHARTS_TOOLTIP_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useStyle() is called outside of a component setup()."
    );
  }

  return ctx;
};

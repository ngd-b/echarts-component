import { Ref, watch } from "vue";
import { omitBy, isUndefined } from "lodash-es";
import {
  useVueEcharts,
  useStyle,
  useTooltip,
  useMark,
  useText,
  useEmphasis,
  useSelect,
  useBlur,
  useSeriesOption,
  useAxis,
} from "./index";
import { MainTypeMap } from "../types";

/**
 * 更新图标series
 * @param props
 * @param options
 */
export const useSeries = <T extends MainTypeMap["series"]>(
  props: Readonly<Record<string, any>>,
  options: Ref<T>
): { update: (data: T) => void } => {
  const vueEcharts = useVueEcharts();
  /**
   * lineStyle \ areaStyle \ itemStyle 等。
   */
  useStyle<T>({
    options: options,
    update,
  });
  /**
   * 系列特定的tooltip配置
   */
  useTooltip({
    options: options,
    update,
  });

  /**
   * 系列mark
   */
  useMark({
    options: options,
    update,
  });

  /**
   * 文本样式
   */
  useText({
    options: options,
    update,
  });

  /**
   * 高亮
   */
  useEmphasis({
    options: options,
    update,
  });

  /**
   * 选中
   */
  useSelect({
    options: options,
    update,
  });

  /**
   * 失焦
   */
  useBlur({
    options: options,
    update,
  });

  /**
   * 配置项
   */
  useSeriesOption({
    options,
    update,
  });

  /**
   * 类坐标轴样式
   */
  useAxis({
    options,
    update,
  });

  watch(
    () => ({ ...props }),
    () => {
      let propsData = omitBy(props, isUndefined);
      options.value = {
        ...options.value,
        ...propsData,
      };
      update(options.value);
    },
    { immediate: true, deep: true }
  );

  /**
   * 更新配置
   * @param data
   */
  function update(data: T) {
    vueEcharts.update("series", data);
  }

  return {
    update,
  };
};

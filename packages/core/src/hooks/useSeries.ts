import { Ref, watch } from "vue";
import { omitBy, isUndefined } from "lodash";
import { useVueEcharts } from "./useVueEcharts";
import { MainTypeMap } from "../types";

/**
 * 更新图标series
 * @param props
 * @param options
 */
export const useSeries = <T extends MainTypeMap["series"]>(
  props: Readonly<Record<string, any>>,
  options: Ref<T>
) => {
  const vueEcharts = useVueEcharts();

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
};

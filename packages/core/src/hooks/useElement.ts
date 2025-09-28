import { GRAPHIC_EVENT_TYPES } from "@/components/graphic/type";
import { GraphicElementComponentOption } from "@/components/type";
import { ShallowRef, useAttrs, watch } from "vue";
import { useGraphic, useElementStyle } from "./index";
import { isUndefined, omitBy } from "lodash-es";

/**
 * @description: 图形元素
 * @param {*}
 * @return {*}
 */
export const useElement = <T extends GraphicElementComponentOption>(
  props: Readonly<Record<string, any>>,
  options: ShallowRef<T>
) => {
  const graphicCtx = useGraphic();

  const attrs = useAttrs();

  useElementStyle({
    options,
    update,
  });

  for (const event of GRAPHIC_EVENT_TYPES) {
    let fn =
      attrs[
        `on${event.charAt(0).toUpperCase()}${event.slice(
          1
        )}` as keyof typeof attrs
      ];
    if (typeof fn === "function") {
      options.value[`on${event}`] = fn as any;
    }
  }

  watch(
    () => props,
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
    graphicCtx.update(data);
  }

  return {
    update,
  };
};

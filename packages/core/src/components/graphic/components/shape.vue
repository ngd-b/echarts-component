<script setup lang="tsx">
import { useElementStyle } from "@/hooks/index";
import { shallowRef, watch } from "vue";
import type { GraphicElementShapeOption } from "../type";
import { isUndefined, omitBy } from "lodash-es";

const options = shallowRef<GraphicElementShapeOption>({});

defineOptions({
  name: "Shape",
  inheritAttrs: false,
});

const elementStyleCtx = useElementStyle();

const props = withDefaults(defineProps<GraphicElementShapeOption>(), {
  subPixelOptimize: undefined,
  autoBatch: undefined,
});

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
function update(data: GraphicElementShapeOption) {
  elementStyleCtx.update("shape", data);
}
</script>
<template>
  <slot></slot>
</template>

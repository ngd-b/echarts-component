<script setup lang="tsx">
import { useElementStyle } from "@/hooks/index";
import { shallowRef, watch } from "vue";
import type { GraphicElementStyleOption } from "../type";
import { isUndefined, omitBy } from "lodash-es";

const options = shallowRef<GraphicElementStyleOption>({});

defineOptions({
  name: "Style",
  inheritAttrs: false,
});

const elementStyleCtx = useElementStyle();

const props = withDefaults(defineProps<GraphicElementStyleOption>(), {});

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
function update(data: GraphicElementStyleOption) {
  elementStyleCtx.update("style", data);
}
</script>
<template>
  <slot></slot>
</template>

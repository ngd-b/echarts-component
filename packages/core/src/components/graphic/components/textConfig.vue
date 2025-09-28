<script setup lang="tsx">
import { useElementStyle } from "@/hooks/index";
import { shallowRef, watch } from "vue";
import type { GraphicElementTextConfigOption } from "../type";
import { isUndefined, omitBy } from "lodash-es";

const options = shallowRef<GraphicElementTextConfigOption>({});

defineOptions({
  name: "TextConfig",
  inheritAttrs: false,
});

const elementStyleCtx = useElementStyle();

const props = withDefaults(defineProps<GraphicElementTextConfigOption>(), {
  local: undefined,
  inside: undefined,
  autoOverflowArea: undefined,
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
function update(data: GraphicElementTextConfigOption) {
  elementStyleCtx.update("textConfig", data);
}
</script>
<template>
  <slot></slot>
</template>

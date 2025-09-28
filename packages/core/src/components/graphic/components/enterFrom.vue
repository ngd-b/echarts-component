<script setup lang="tsx">
import { useElementStyle } from "@/hooks/index";
import { shallowRef, watch } from "vue";
import type { GraphicElementEnterFromOption } from "../type";
import { isUndefined, omitBy } from "lodash-es";

const options = shallowRef<GraphicElementEnterFromOption>({});

defineOptions({
  name: "EnterFrom",
  inheritAttrs: false,
});

const elementStyleCtx = useElementStyle();

const props = withDefaults(defineProps<GraphicElementEnterFromOption>(), {});

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
function update(data: GraphicElementEnterFromOption) {
  elementStyleCtx.update("enterFrom", data);
}
</script>
<template>
  <slot></slot>
</template>

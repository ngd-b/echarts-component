<script setup lang="tsx">
import { useElementStyle } from "@/hooks/index";
import { shallowRef, watch } from "vue";
import type { GraphicElementLeaveToOption } from "../type";
import { isUndefined, omitBy } from "lodash-es";

const options = shallowRef<GraphicElementLeaveToOption>({});

defineOptions({
  name: "LeaveTo",
  inheritAttrs: false,
});

const elementStyleCtx = useElementStyle();

const props = withDefaults(defineProps<GraphicElementLeaveToOption>(), {});

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
function update(data: GraphicElementLeaveToOption) {
  elementStyleCtx.update("leaveTo", data);
}
</script>
<template>
  <slot></slot>
</template>

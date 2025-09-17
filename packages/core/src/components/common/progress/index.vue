<script setup lang="tsx">
import { ref, watch } from "vue";
import { useStyle, useText } from "../../../hooks/index";
import type { ProgressComponentOption, ProgressOption } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<ProgressComponentOption>({});

const styleContext = useStyle();

useText({
  options,
  update,
});

// 配置坐标系样式
useStyle({
  options,
  update,
});

defineOptions({
  name: "Progress",
});

const props = withDefaults(defineProps<ProgressOption>(), {
  show: undefined,
  overlap: undefined,
  roundCap: undefined,
  clip: undefined,
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
function update(data: ProgressComponentOption) {
  styleContext.update("progress", data);
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, watch } from "vue";
import { useStyle, useText, useTimeline } from "../../hooks/index";
import type { ProgressComponentOption, ProgressOption } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<ProgressComponentOption>({});

const timelineCtx = useTimeline();

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

const props = withDefaults(defineProps<ProgressOption>(), {});

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
  timelineCtx.update("progress", data);
}
</script>
<template>
  <slot></slot>
</template>

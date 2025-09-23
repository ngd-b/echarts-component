<script setup lang="tsx">
import { ref, watch } from "vue";
import { useStyle, useSeriesOption } from "@/hooks/index";
import type { AnchorComponentOption, AnchorOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<AnchorComponentOption>({});

const seriesOption = useSeriesOption();

// 配置坐标系样式
useStyle({
  options,
  update,
});

defineOptions({
  name: "Anchor",
});

const props = withDefaults(defineProps<AnchorOption>(), {
  show: undefined,
  showAbove: undefined,
  keepAspect: undefined,
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
function update(data: AnchorComponentOption) {
  seriesOption.update("anchor", data);
}
</script>
<template>
  <slot></slot>
</template>

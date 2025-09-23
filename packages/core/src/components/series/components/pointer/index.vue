<script setup lang="tsx">
import { ref, watch } from "vue";
import { useStyle, useSeriesOption } from "@/hooks/index";
import type { PointerComponentOption, PointerOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<PointerComponentOption>({});

const seriesOption = useSeriesOption();

// 配置坐标系样式
useStyle({
  options,
  update,
});

defineOptions({
  name: "Pointer",
});

const props = withDefaults(defineProps<PointerOption>(), {
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
function update(data: PointerComponentOption) {
  seriesOption.update("pointer", data);
}
</script>
<template>
  <slot></slot>
</template>

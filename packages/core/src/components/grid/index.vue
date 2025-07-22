<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { GridComponentOption, GridOptions } from "./type";
import { DefaultGridOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<GridComponentOption>({
  id,
  ...DefaultGridOptions,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
defineOptions({
  name: "Grid",
});

const props = withDefaults(defineProps<GridOptions>(), {
  show: true,
  containLabel: false,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    vueEcharts.updateGrid({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { BarSeries, BarSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";
import { DefaultBarSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([BarChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<BarSeriesOption>({
  type: "bar",
  id: id,
  ...DefaultBarSeries,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
defineOptions({
  name: "Bar",
});

const props = withDefaults(defineProps<BarSeries>(), {
  legendHoverLink: true,
  clip: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    vueEcharts.updateSeries({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

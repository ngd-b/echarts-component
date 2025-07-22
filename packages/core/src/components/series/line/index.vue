<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../../hooks/index";
import { DefaultLineSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LineChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<LineSeriesOption>({
  type: "line",
  id: id,
  ...DefaultLineSeries,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  showSymbol: true,
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

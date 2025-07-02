<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { VueEcharts } from "../../../types/index";
import { inject, ref, watch } from "vue";
import type { Actions } from "../../type";

echarts.use([LineChart, CanvasRenderer]);

const options = ref<LineSeriesOption>({
  type: "line",
});
const { updateSeries } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  data: () => [],
  xAxisIndex: 0,
  yAxisIndex: 0,
});

watch(
  () => props,
  () => {
    updateSeries({ ...options.value, ...props });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

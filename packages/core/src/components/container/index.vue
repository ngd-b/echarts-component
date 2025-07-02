<template>
  <div ref="root" class="w-full h-full"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onMounted, provide, ref, watch } from "vue";
import { VueEcharts } from "../../types/index";
import type { ChartOptions, SeriesOption } from "./type";
import type { XAXisOption, YAXisOption } from "echarts/types/dist/shared";

let chart: echarts.ECharts | null = null;
const root = ref(null);
const options = ref<ChartOptions>({});

onMounted(() => {
  initChart();
});

provide(VueEcharts, {
  updateSeries,
  updateXAxis,
  updateYAxis,
});

watch(
  options,
  () => {
    chart?.setOption(options.value);
  },
  { immediate: true, deep: true }
);
function initChart() {
  chart = echarts.init(root.value);

  chart.setOption(options.value);
}
function updateSeries(seriesData: SeriesOption) {
  options.value.series = seriesData;
}

function updateXAxis(xAxisData: XAXisOption) {
  options.value.xAxis = xAxisData;
}
function updateYAxis(yAxisData: YAXisOption) {
  options.value.yAxis = yAxisData;
}
</script>

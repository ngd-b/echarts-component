<template>
  <div ref="root" class="w-full h-full"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onMounted, provide, ref, watch } from "vue";
import { VueEcharts } from "../../types/index";
import type { ChartOptions, SeriesOption, SeriesConfig } from "./type";
import { DefaultSeriesConfig } from "./type";
import { omitBy, isUndefined } from "lodash";
//
import type { XAXisOption, YAXisOption, GridComponentOption } from "../type";

let chart: echarts.ECharts | null = null;
const root = ref(null);
const options = ref<ChartOptions>({
  ...DefaultSeriesConfig,
});
const props = withDefaults(defineProps<SeriesConfig>(), {
  animation: true,
});

onMounted(() => {
  initChart();
});

provide(VueEcharts, {
  updateSeries,
  updateXAxis,
  updateYAxis,
  updateGrid,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
  },
  { immediate: true, deep: true }
);

watch(
  options,
  () => {
    console.log("update options", options.value);
    chart?.setOption({ ...options.value });
  },
  { immediate: true, deep: true }
);
function initChart() {
  chart = echarts.init(root.value);

  chart.setOption({ ...options.value });
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
function updateGrid(gridData: GridComponentOption) {
  options.value.grid = gridData;
}
</script>

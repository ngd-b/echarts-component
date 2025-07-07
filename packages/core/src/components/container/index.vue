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
import type {
  XAXisOption,
  YAXisOption,
  GridComponentOption,
  TitleComponentOption,
} from "../type";

let chart: echarts.ECharts | null = null;
const root = ref(null);
const options = ref<ChartOptions & { series: SeriesOption[] }>({
  ...DefaultSeriesConfig,
  series: [],
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
  updateTitle,
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
  let index = options.value.series.findIndex(
    (item: SeriesOption) => item.id === seriesData.id
  );

  if (index > -1) {
    options.value.series[index] = seriesData;
  } else {
    options.value.series.push(seriesData);
  }
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
function updateTitle(titleData: TitleComponentOption) {
  options.value.title = titleData;
}
</script>

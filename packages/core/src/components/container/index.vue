<template>
  <div ref="root" v-bind="attrs"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onMounted, provide, ref, useAttrs, watch } from "vue";
import type { EchartsContext } from "../../types/index";
import { ECHARTS_CONTEXT_KEY } from "../../hooks/index";
import type { ChartOptions, SeriesOption, SeriesConfig } from "./type";
import { DefaultSeriesConfig } from "./type";
import { omitBy, isUndefined } from "lodash";
//
import type {
  XAXisOption,
  YAXisOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from "../type";

defineOptions({
  name: "VueEcharts",
  inheritAttrs: false, // 继承属性
});

const attrs = useAttrs();
let chart: echarts.ECharts | null = null;

const root = ref(null);
const options = ref<
  ChartOptions & {
    series?: SeriesOption[];
    xAxis?: XAXisOption[];
    yAxis?: YAXisOption[];
    grid?: GridComponentOption[];
    title?: TitleComponentOption[];
    legend?: LegendComponentOption[];
    tooltip?: TooltipComponentOption[];
  }
>({
  ...DefaultSeriesConfig,
});
const props = withDefaults(defineProps<SeriesConfig>(), {
  animation: true,
});

onMounted(() => {
  initChart();
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
  if (options.value.series === undefined) {
    options.value.series = [];
  }
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
  if (options.value.xAxis === undefined) {
    options.value.xAxis = [];
  }
  let index = options.value.xAxis.findIndex(
    (item: XAXisOption) => item.id === xAxisData.id
  );

  if (index > -1) {
    options.value.xAxis[index] = xAxisData;
  } else {
    options.value.xAxis.push(xAxisData);
  }
}
function updateYAxis(yAxisData: YAXisOption) {
  if (options.value.yAxis === undefined) {
    options.value.yAxis = [];
  }
  let index = options.value.yAxis.findIndex(
    (item: YAXisOption) => item.id === yAxisData.id
  );

  if (index > -1) {
    options.value.yAxis[index] = yAxisData;
  } else {
    options.value.yAxis.push(yAxisData);
  }
}
function updateGrid(gridData: GridComponentOption) {
  if (options.value.grid === undefined) {
    options.value.grid = [];
  }
  let index = options.value.grid.findIndex(
    (item: GridComponentOption) => item.id === gridData.id
  );

  if (index > -1) {
    options.value.grid[index] = gridData;
  } else {
    options.value.grid.push(gridData);
  }
}
function updateTitle(titleData: TitleComponentOption) {
  if (options.value.title === undefined) {
    options.value.title = [];
  }
  let index = options.value.title.findIndex(
    (item: TitleComponentOption) => item.id === titleData.id
  );

  if (index > -1) {
    options.value.title[index] = titleData;
  } else {
    options.value.title.push(titleData);
  }
}

function updateLegend(legendData: LegendComponentOption) {
  if (options.value.legend === undefined) {
    options.value.legend = [];
  }
  let index = options.value.legend.findIndex(
    (item: LegendComponentOption) => item.id === legendData.id
  );

  if (index > -1) {
    options.value.legend[index] = legendData;
  } else {
    options.value.legend.push(legendData);
  }
}

function updateTooltip(tooltipData: any) {
  if (options.value.tooltip === undefined) {
    options.value.tooltip = [];
  }
  let index = options.value.tooltip.findIndex(
    (item: TooltipComponentOption) => item.id === tooltipData.id
  );

  if (index > -1) {
    options.value.tooltip[index] = tooltipData;
  } else {
    options.value.tooltip.push(tooltipData);
  }
}

provide<EchartsContext>(ECHARTS_CONTEXT_KEY, {
  echartRef: chart,
  updateSeries,
  updateXAxis,
  updateYAxis,
  updateGrid,
  updateTitle,
  updateLegend,
  updateTooltip,
});
</script>

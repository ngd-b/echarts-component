<script setup lang="tsx">
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { HeatmapSeries, HeatmapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultHeatmapSeries } from "./type";

echarts.use([HeatmapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<HeatmapSeriesOption>({
  type: "heatmap",
  id: id,
  ...DefaultHeatmapSeries,
});

defineOptions({
  name: "Heatmap",
});

const props = withDefaults(defineProps<HeatmapSeries>(), {});
useSeries<HeatmapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

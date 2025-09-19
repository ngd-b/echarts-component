<script setup lang="tsx">
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { HeatmapSeries, HeatmapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([HeatmapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<HeatmapSeriesOption>({
  type: "heatmap",
  id: id,
});

defineOptions({
  name: "Heatmap",
});

const props = withDefaults(defineProps<HeatmapSeries>(), {
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
  legendHoverLink: undefined,
  progressive: undefined,
  sourceHeader: undefined,
  universalTransition: undefined,
});
useSeries<HeatmapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

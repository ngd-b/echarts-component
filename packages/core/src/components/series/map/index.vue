<script setup lang="tsx">
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { MapSeries, MapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([MapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<MapSeriesOption>({
  type: "map",
  id: id,
  map: "",
});

defineOptions({
  name: "Map",
});

const props = withDefaults(defineProps<MapSeries>(), {
  roam: undefined,
  selectedMode: undefined,
  preserveAspect: undefined,
  clip: undefined,
  silent: undefined,
  animation: undefined,
  legendHoverLink: undefined,
  progressive: undefined,
  showLegendSymbol: undefined,
  sourceHeader: undefined,
});
useSeries<MapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

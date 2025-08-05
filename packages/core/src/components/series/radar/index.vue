<script setup lang="tsx">
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { RadarSeriesOption, RadarSeries } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultRadarSeries } from "./type";

echarts.use([RadarChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<RadarSeriesOption>({
  type: "radar",
  id: id,
  ...DefaultRadarSeries,
});

defineOptions({
  name: "Radar",
});

const props = withDefaults(defineProps<RadarSeries>(), {
  animation: true,
});
useSeries<RadarSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

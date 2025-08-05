<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { ref, useId } from "vue";
import { useSeries } from "../../../hooks/index";
import { DefaultLineSeries } from "./type";

echarts.use([LineChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<LineSeriesOption>({
  type: "line",
  id: id,
  ...DefaultLineSeries,
});

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  showSymbol: true,
  legendHoverLink: true,
  clip: true,
  animation: true,
});
useSeries<LineSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

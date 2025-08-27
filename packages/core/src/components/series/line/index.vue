<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { ref, useId } from "vue";
import { useSeries } from "../../../hooks/index";

echarts.use([LineChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<LineSeriesOption>({
  type: "line",
  id: id,
});

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  showSymbol: undefined,
  symbolKeepAspect: undefined,
  legendHoverLink: undefined,
  connectNulls: undefined,
  clip: undefined,
  triggerLineEvent: undefined,
  step: undefined,
  selectedMode: undefined,
  smooth: undefined,
  silent: undefined,
  animation: undefined,
  sourceHeader: undefined,
});
useSeries<LineSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

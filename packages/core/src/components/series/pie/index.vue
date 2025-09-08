<script setup lang="tsx">
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PieSeries, PieSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([PieChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<PieSeriesOption>({
  type: "pie",
  id: id,
});

defineOptions({
  name: "Pie",
});

const props = withDefaults(defineProps<PieSeries>(), {
  legendHoverLink: undefined,
  selectedMode: undefined,
  clockwise: undefined,
  roseType: undefined,
  avoidLabelOverlap: undefined,
  stillShowZeroSum: undefined,
  showEmptyCircle: undefined,
  silent: undefined,
  animation: undefined,
  progressive: undefined,
  sourceHeader: undefined,
});
useSeries<PieSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

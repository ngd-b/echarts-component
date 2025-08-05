<script setup lang="tsx">
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PieSeries, PieSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultPieSeries } from "./type";

echarts.use([PieChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<PieSeriesOption>({
  type: "pie",
  id: id,
  ...DefaultPieSeries,
});

defineOptions({
  name: "Pie",
});

const props = withDefaults(defineProps<PieSeries>(), {
  legendHoverLink: true,
  clockwise: true,
  avoidLabelOverlap: true,
  stillShowZeroSum: true,
  showEmptyCircle: true,
  animation: true,
});
useSeries<PieSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

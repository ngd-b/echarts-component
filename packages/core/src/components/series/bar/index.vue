<script setup lang="tsx">
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { BarSeries, BarSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";
import { DefaultBarSeries } from "./type";

echarts.use([BarChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<BarSeriesOption>({
  type: "bar",
  id: id,
  ...DefaultBarSeries,
});
defineOptions({
  name: "Bar",
});

const props = withDefaults(defineProps<BarSeries>(), {
  legendHoverLink: true,
  clip: true,
  animation: true,
});

useSeries<BarSeriesOption>(props, options);
</script>
<template></template>

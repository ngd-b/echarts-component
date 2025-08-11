<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ParallelChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ParallelSeries, ParallelSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([ParallelChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ParallelSeriesOption>({
  type: "parallel",
  id: id,
});

defineOptions({
  name: "Parallel",
});

const props = withDefaults(defineProps<ParallelSeries>(), {
  realtime: true,
  animation: true,
});
useSeries<ParallelSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { GraphSeries, GraphSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([GraphChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<GraphSeriesOption>({
  type: "graph",
  id: id,
});

defineOptions({
  name: "Lines",
});

const props = withDefaults(defineProps<GraphSeries>(), {
  legendHoverLink: true,
  animation: true,
});
useSeries<GraphSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

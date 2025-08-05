<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ScatterSeries, ScatterSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultScatterSeries } from "./type";

echarts.use([ScatterChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ScatterSeriesOption>({
  type: "scatter",
  id: id,
  ...DefaultScatterSeries,
});

defineOptions({
  name: "Scatter",
});

const props = withDefaults(defineProps<ScatterSeries>(), {
  legendHoverLink: true,
  clip: true,
  animation: true,
});
useSeries<ScatterSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

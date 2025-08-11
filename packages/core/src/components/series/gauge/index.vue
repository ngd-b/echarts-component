<script setup lang="tsx">
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { GaugeSeries, GaugeSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([GaugeChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<GaugeSeriesOption>({
  type: "gauge",
  id: id,
});

defineOptions({
  name: "Gauge",
});

const props = withDefaults(defineProps<GaugeSeries>(), {
  legendHoverLink: true,
  clockwise: true,
  animation: true,
});
useSeries<GaugeSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

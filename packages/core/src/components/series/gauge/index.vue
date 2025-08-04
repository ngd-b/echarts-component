<script setup lang="tsx">
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { GaugeSeries, GaugeSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultGaugeSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([GaugeChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<GaugeSeriesOption>({
  type: "gauge",
  id: id,
  ...DefaultGaugeSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Gauge",
});

const props = withDefaults(defineProps<GaugeSeries>(), {
  legendHoverLink: true,
  clockwise: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    vueEcharts.updateSeries({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ScatterSeries, ScatterSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultScatterSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([ScatterChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ScatterSeriesOption>({
  type: "scatter",
  id: id,
  ...DefaultScatterSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Scatter",
});

const props = withDefaults(defineProps<ScatterSeries>(), {
  legendHoverLink: true,
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

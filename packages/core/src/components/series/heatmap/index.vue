<script setup lang="tsx">
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { HeatmapSeries, HeatmapSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultHeatmapSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([HeatmapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<HeatmapSeriesOption>({
  type: "heatmap",
  id: id,
  ...DefaultHeatmapSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Heatmap",
});

const props = withDefaults(defineProps<HeatmapSeries>(), {
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

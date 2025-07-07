<script setup lang="tsx">
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PieSeries, PieSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultPieSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([PieChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<PieSeriesOption>({
  type: "pie",
  id: id,
  ...DefaultPieSeries,
});
const { updateSeries } = useVueEcharts();

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<PieSeries>(), {
  legendHoverLink: true,
  clockwise: true,
  avoidLabelOverlap: true,
  stillShowZeroSum: true,
  showEmptyCircle: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateSeries({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

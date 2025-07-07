<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { VueEcharts } from "../../../types/index";
import { inject, ref, useId, watch } from "vue";
import type { Actions } from "../../type";
import { DefaultLineSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LineChart, CanvasRenderer]);

// 组件唯一id
let id = useId();

const options = ref<LineSeriesOption>({
  type: "line",
  id: id,
  ...DefaultLineSeries,
});
const { updateSeries } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  showSymbol: true,
  legendHoverLink: true,
  clip: true,
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

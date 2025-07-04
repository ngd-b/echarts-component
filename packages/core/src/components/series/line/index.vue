<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LineSeries, LineSeriesOption } from "./type";
import { VueEcharts } from "../../../types/index";
import { inject, ref, watch } from "vue";
import type { Actions } from "../../type";
import { DefaultLineSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LineChart, CanvasRenderer]);

const options = ref<LineSeriesOption>({ type: "line", ...DefaultLineSeries });
const { updateSeries } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Line",
});

const props = withDefaults(defineProps<LineSeries>(), {
  data: () => [],
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

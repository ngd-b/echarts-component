<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PieSeries, PieSeriesOption } from "./type";
import { VueEcharts } from "../../../types/index";
import { inject, ref, watch } from "vue";
import type { Actions } from "../../type";
import { DefaultPieSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LineChart, CanvasRenderer]);

const options = ref<PieSeriesOption>({ type: "pie", ...DefaultPieSeries });
const { updateSeries } = inject<Actions>(VueEcharts) as Actions;

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

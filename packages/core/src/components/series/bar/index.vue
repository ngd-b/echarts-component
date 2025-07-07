<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { BarSeries, BarSeriesOption } from "./type";
import { VueEcharts } from "../../../types/index";
import { inject, ref, watch } from "vue";
import type { Actions } from "../../type";
import { DefaultBarSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LineChart, CanvasRenderer]);

const options = ref<BarSeriesOption>({ type: "bar", ...DefaultBarSeries });
const { updateSeries } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Bar",
});

const props = withDefaults(defineProps<BarSeries>(), {
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

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { CandlestickChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { CandlestickSeries, CandlestickSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultCandlestickSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([CandlestickChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<CandlestickSeriesOption>({
  type: "candlestick",
  id: id,
  ...DefaultCandlestickSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Candlestick",
});

const props = withDefaults(defineProps<CandlestickSeries>(), {
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

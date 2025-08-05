<script setup lang="tsx">
import * as echarts from "echarts/core";
import { CandlestickChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { CandlestickSeries, CandlestickSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";
import { DefaultCandlestickSeries } from "./type";

echarts.use([CandlestickChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<CandlestickSeriesOption>({
  type: "candlestick",
  id: id,
  ...DefaultCandlestickSeries,
});

defineOptions({
  name: "Candlestick",
});

const props = withDefaults(defineProps<CandlestickSeries>(), {
  legendHoverLink: true,
});

useSeries<CandlestickSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

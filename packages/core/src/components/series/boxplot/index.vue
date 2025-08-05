<script setup lang="tsx">
import * as echarts from "echarts/core";
import { BoxplotChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { BoxplotSeries, BoxplotSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";
import { DefaultBoxplotSeries } from "./type";

echarts.use([BoxplotChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<BoxplotSeriesOption>({
  type: "boxplot",
  id: id,
  ...DefaultBoxplotSeries,
});

defineOptions({
  name: "Boxplot",
});

const props = withDefaults(defineProps<BoxplotSeries>(), {
  legendHoverLink: true,
});

useSeries<BoxplotSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

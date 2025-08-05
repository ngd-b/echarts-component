<script setup lang="tsx">
import * as echarts from "echarts/core";
import { PictorialBarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PictorialBarSeries, PictorialBarSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultPictorialBarSeries } from "./type";

echarts.use([PictorialBarChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<PictorialBarSeriesOption>({
  type: "pictorialBar",
  id: id,
  ...DefaultPictorialBarSeries,
});

defineOptions({
  name: "PictorialBar",
});

const props = withDefaults(defineProps<PictorialBarSeries>(), {
  legendHoverLink: true,
  animation: true,
});
useSeries<PictorialBarSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

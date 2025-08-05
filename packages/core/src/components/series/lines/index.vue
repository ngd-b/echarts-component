<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LinesChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LinesSeries, LinesSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultLinesSeries } from "./type";

echarts.use([LinesChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<LinesSeriesOption>({
  type: "lines",
  id: id,
  ...DefaultLinesSeries,
});

defineOptions({
  name: "Lines",
});

const props = withDefaults(defineProps<LinesSeries>(), {
  animation: true,
});

useSeries<LinesSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

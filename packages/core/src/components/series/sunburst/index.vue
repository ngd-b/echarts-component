<script setup lang="tsx">
import * as echarts from "echarts/core";
import { SunburstChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { SunburstSeries, SunburstSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([SunburstChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<SunburstSeriesOption>({
  type: "sunburst",
  id: id,
});

defineOptions({
  name: "Sunburst",
});

const props = withDefaults(defineProps<SunburstSeries>(), {
  clockwise: undefined,
  renderLabelForZeroData: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<SunburstSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

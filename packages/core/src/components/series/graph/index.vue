<script setup lang="tsx">
import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { GraphSeries, GraphSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultGraphSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([GraphChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<GraphSeriesOption>({
  type: "graph",
  id: id,
  ...DefaultGraphSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Lines",
});

const props = withDefaults(defineProps<GraphSeries>(), {
  legendHoverLink: true,
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

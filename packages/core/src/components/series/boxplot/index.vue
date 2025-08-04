<script setup lang="tsx">
import * as echarts from "echarts/core";
import { BoxplotChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { BoxplotSeries, BoxplotSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultBoxplotSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([BoxplotChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<BoxplotSeriesOption>({
  type: "boxplot",
  id: id,
  ...DefaultBoxplotSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Boxplot",
});

const props = withDefaults(defineProps<BoxplotSeries>(), {
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

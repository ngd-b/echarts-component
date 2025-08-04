<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ParallelChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ParallelSeries, ParallelSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultParallelSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([ParallelChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ParallelSeriesOption>({
  type: "parallel",
  id: id,
  ...DefaultParallelSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Parallel",
});

const props = withDefaults(defineProps<ParallelSeries>(), {});

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

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { LinesChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { LinesSeries, LinesSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultLinesSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([LinesChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<LinesSeriesOption>({
  type: "lines",
  id: id,
  ...DefaultLinesSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Lines",
});

const props = withDefaults(defineProps<LinesSeries>(), {});

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

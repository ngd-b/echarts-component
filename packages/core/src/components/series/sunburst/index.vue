<script setup lang="tsx">
import * as echarts from "echarts/core";
import { SunburstChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { SunburstSeries, SunburstSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultSunburstSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([SunburstChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<SunburstSeriesOption>({
  type: "sunburst",
  id: id,
  ...DefaultSunburstSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Sunburst",
});

const props = withDefaults(defineProps<SunburstSeries>(), {
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

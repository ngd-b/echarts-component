<script setup lang="tsx">
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { RadarSeriesOption, RadarSeries } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultEffectRadarSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([RadarChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<RadarSeriesOption>({
  type: "radar",
  id: id,
  ...DefaultEffectRadarSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Radar",
});

const props = withDefaults(defineProps<RadarSeries>(), {
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

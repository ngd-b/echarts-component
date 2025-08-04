<script setup lang="tsx">
import * as echarts from "echarts/core";
import { PictorialBarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { PictorialBarSeries, PictorialBarSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultPictorialBarSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([PictorialBarChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<PictorialBarSeriesOption>({
  type: "pictorialBar",
  id: id,
  ...DefaultPictorialBarSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "PictorialBar",
});

const props = withDefaults(defineProps<PictorialBarSeries>(), {
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

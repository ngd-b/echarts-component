<script setup lang="tsx">
import * as echarts from "echarts/core";
import { EffectScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { EffectScatterSeries, EffectScatterSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultEffectScatterSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([EffectScatterChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<EffectScatterSeriesOption>({
  type: "effectScatter",
  id: id,
  ...DefaultEffectScatterSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "EffectScatter",
});

const props = withDefaults(defineProps<EffectScatterSeries>(), {
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

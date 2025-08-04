<script setup lang="tsx">
import * as echarts from "echarts/core";
import { FunnelChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { FunnelSeries, FunnelSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultFunnelSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([FunnelChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<FunnelSeriesOption>({
  type: "funnel",
  id: id,
  ...DefaultFunnelSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Funnel",
});

const props = withDefaults(defineProps<FunnelSeries>(), {});

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

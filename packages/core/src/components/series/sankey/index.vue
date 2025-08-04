<script setup lang="tsx">
import * as echarts from "echarts/core";
import { SankeyChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { SankeySeries, SankeySeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultSankeySeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([SankeyChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<SankeySeriesOption>({
  type: "sankey",
  id: id,
  ...DefaultSankeySeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Sankey",
});

const props = withDefaults(defineProps<SankeySeries>(), {
  animation: true,
  draggable: true,
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

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { TreemapSeries, TreemapSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultTreemapSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([TreemapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<TreemapSeriesOption>({
  type: "treemap",
  id: id,
  ...DefaultTreemapSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Treemap",
});

const props = withDefaults(defineProps<TreemapSeries>(), {
  roam: true,
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

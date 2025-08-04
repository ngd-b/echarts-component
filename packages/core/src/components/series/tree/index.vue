<script setup lang="tsx">
import * as echarts from "echarts/core";
import { TreeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { TreeSeries, TreeSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultTreeSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([TreeChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<TreeSeriesOption>({
  type: "tree",
  id: id,
  ...DefaultTreeSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Tree",
});

const props = withDefaults(defineProps<TreeSeries>(), {
  expandAndCollapse: true,
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

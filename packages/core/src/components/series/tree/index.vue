<script setup lang="tsx">
import * as echarts from "echarts/core";
import { TreeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { TreeSeries, TreeSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([TreeChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<TreeSeriesOption>({
  type: "tree",
  id: id,
});

defineOptions({
  name: "Tree",
});

const props = withDefaults(defineProps<TreeSeries>(), {
  expandAndCollapse: undefined,
  roam: undefined,
  symbolKeepAspect: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<TreeSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

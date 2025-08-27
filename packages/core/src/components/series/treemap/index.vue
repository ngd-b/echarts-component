<script setup lang="tsx">
import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { TreemapSeries, TreemapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([TreemapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<TreemapSeriesOption>({
  type: "treemap",
  id: id,
});

defineOptions({
  name: "Treemap",
});

const props = withDefaults(defineProps<TreemapSeries>(), {
  roam: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<TreemapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

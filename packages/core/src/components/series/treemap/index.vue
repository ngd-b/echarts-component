<script setup lang="tsx">
import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { TreemapSeries, TreemapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultTreemapSeries } from "./type";

echarts.use([TreemapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<TreemapSeriesOption>({
  type: "treemap",
  id: id,
  ...DefaultTreemapSeries,
});

defineOptions({
  name: "Treemap",
});

const props = withDefaults(defineProps<TreemapSeries>(), {
  roam: true,
});
useSeries<TreemapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

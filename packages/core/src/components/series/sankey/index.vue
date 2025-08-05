<script setup lang="tsx">
import * as echarts from "echarts/core";
import { SankeyChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { SankeySeries, SankeySeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultSankeySeries } from "./type";

echarts.use([SankeyChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<SankeySeriesOption>({
  type: "sankey",
  id: id,
  ...DefaultSankeySeries,
});

defineOptions({
  name: "Sankey",
});

const props = withDefaults(defineProps<SankeySeries>(), {
  animation: true,
  draggable: true,
});
useSeries<SankeySeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

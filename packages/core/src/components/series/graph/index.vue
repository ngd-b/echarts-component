<script setup lang="tsx">
import type { GraphSeries, GraphSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<GraphSeriesOption>({
  type: "graph",
  id: id,
});

defineOptions({
  name: "Graph",
});

const props = withDefaults(defineProps<GraphSeries>(), {
  legendHoverLink: undefined,
  roam: undefined,
  draggable: undefined,
  symbolKeepAspect: undefined,
  autoCurveness: undefined,
  preserveAspect: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
  focusNodeAdjacency: undefined,
  universalTransition: undefined,
  progressive: undefined,
});
useSeries<GraphSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

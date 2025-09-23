<script setup lang="tsx">
import type { SankeySeries, SankeySeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<SankeySeriesOption>({
  type: "sankey",
  id: id,
});

defineOptions({
  name: "Sankey",
});

const props = withDefaults(defineProps<SankeySeries>(), {
  draggable: undefined,
  roam: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<SankeySeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

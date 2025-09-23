<script setup lang="tsx">
import type { TreeSeries, TreeSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

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

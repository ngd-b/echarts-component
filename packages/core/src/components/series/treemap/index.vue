<script setup lang="tsx">
import type { TreemapSeries, TreemapSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

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

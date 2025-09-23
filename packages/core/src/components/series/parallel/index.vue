<script setup lang="tsx">
import type { ParallelSeries, ParallelSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<ParallelSeriesOption>({
  type: "parallel",
  id: id,
});

defineOptions({
  name: "Parallel",
});

const props = withDefaults(defineProps<ParallelSeries>(), {
  realtime: undefined,
  smooth: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<ParallelSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

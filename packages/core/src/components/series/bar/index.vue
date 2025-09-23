<script setup lang="tsx">
import type { BarSeries, BarSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<BarSeriesOption>({
  type: "bar",
  id: id,
});
defineOptions({
  name: "Bar",
});

const props = withDefaults(defineProps<BarSeries>(), {
  legendHoverLink: undefined,
  roundCap: undefined,
  realtimeSort: undefined,
  showBackground: undefined,
  selectedMode: undefined,
  large: undefined,
  clip: undefined,
  silent: undefined,
  animation: undefined,
  sourceHeader: undefined,
  progressive: undefined,
  universalTransition: undefined,
});

useSeries<BarSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

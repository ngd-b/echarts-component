<script setup lang="tsx">
import type { ScatterSeries, ScatterSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<ScatterSeriesOption>({
  type: "scatter",
  id: id,
});

defineOptions({
  name: "Scatter",
});

const props = withDefaults(defineProps<ScatterSeries>(), {
  large: undefined,
  legendHoverLink: undefined,
  clip: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<ScatterSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

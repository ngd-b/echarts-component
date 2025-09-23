<script setup lang="tsx">
import type { LinesSeries, LinesSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<LinesSeriesOption>({
  type: "lines",
  id: id,
});

defineOptions({
  name: "Lines",
});

const props = withDefaults(defineProps<LinesSeries>(), {
  polyline: undefined,
  large: undefined,
  selectedMode: undefined,
  clip: undefined,
  silent: undefined,
  animation: undefined,
  progressive: undefined,
  legendHoverLink: undefined,
});

useSeries<LinesSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

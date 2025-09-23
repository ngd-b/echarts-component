<script setup lang="tsx">
import type { RadarSeriesOption, RadarSeries } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<RadarSeriesOption>({
  type: "radar",
  id: id,
});

defineOptions({
  name: "Radar",
});

const props = withDefaults(defineProps<RadarSeries>(), {
  symbolKeepAspect: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<RadarSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

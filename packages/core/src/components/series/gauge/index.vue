<script setup lang="tsx">
import type { GaugeSeries, GaugeSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<GaugeSeriesOption>({
  type: "gauge",
  id: id,
});

defineOptions({
  name: "Gauge",
});

const props = withDefaults(defineProps<GaugeSeries>(), {
  legendHoverLink: undefined,
  clockwise: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<GaugeSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

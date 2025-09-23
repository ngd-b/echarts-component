<script setup lang="tsx">
import type { FunnelSeries, FunnelSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<FunnelSeriesOption>({
  type: "funnel",
  id: id,
});

defineOptions({
  name: "Funnel",
});

const props = withDefaults(defineProps<FunnelSeries>(), {
  legendHoverLink: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
  universalTransition: undefined,
});

useSeries<FunnelSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

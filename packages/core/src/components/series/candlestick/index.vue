<script setup lang="tsx">
import type { CandlestickSeries, CandlestickSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<CandlestickSeriesOption>({
  type: "candlestick",
  id: id,
});

defineOptions({
  name: "Candlestick",
});

const props = withDefaults(defineProps<CandlestickSeries>(), {
  legendHoverLink: undefined,
  selectedMode: undefined,
  large: undefined,
  clip: undefined,
  silent: undefined,
  universalTransition: undefined,
});

useSeries<CandlestickSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

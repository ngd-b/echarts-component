<script setup lang="tsx">
import type { EffectScatterSeries, EffectScatterSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<EffectScatterSeriesOption>({
  type: "effectScatter",
  id: id,
});
defineOptions({
  name: "EffectScatter",
});

const props = withDefaults(defineProps<EffectScatterSeries>(), {
  legendHoverLink: undefined,
  animation: undefined,
  clip: undefined,
  symbolKeepAspect: undefined,
  selectedMode: undefined,
  silent: undefined,
  universalTransition: undefined,
});

useSeries<EffectScatterSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

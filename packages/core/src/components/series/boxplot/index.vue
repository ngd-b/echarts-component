<script setup lang="tsx">
import type { BoxplotSeries, BoxplotSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<BoxplotSeriesOption>({
  type: "boxplot",
  id: id,
});

defineOptions({
  name: "Boxplot",
});

const props = withDefaults(defineProps<BoxplotSeries>(), {
  legendHoverLink: undefined,
  selectedMode: undefined,
  silent: undefined,
  universalTransition: undefined,
});

useSeries<BoxplotSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

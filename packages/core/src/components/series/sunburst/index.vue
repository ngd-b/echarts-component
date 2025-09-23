<script setup lang="tsx">
import type { SunburstSeries, SunburstSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<SunburstSeriesOption>({
  type: "sunburst",
  id: id,
});

defineOptions({
  name: "Sunburst",
});

const props = withDefaults(defineProps<SunburstSeries>(), {
  clockwise: undefined,
  renderLabelForZeroData: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<SunburstSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

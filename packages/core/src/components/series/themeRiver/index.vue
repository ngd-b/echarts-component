<script setup lang="tsx">
import type { ThemeRiverSeries, ThemeRiverSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<ThemeRiverSeriesOption>({
  type: "themeRiver",
  id: id,
});

defineOptions({
  name: "ThemeRiver",
});

const props = withDefaults(defineProps<ThemeRiverSeries>(), {
  boundaryGap: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
});
useSeries<ThemeRiverSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

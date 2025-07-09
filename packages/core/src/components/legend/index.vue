<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { LegendComponentOption, LegendOptions } from "./type";
import { DefaultLegendOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<LegendComponentOption>({
  id,
  ...DefaultLegendOptions,
});
const { updateLegend } = useVueEcharts();

defineOptions({
  name: "Legend",
});

const props = withDefaults(defineProps<LegendOptions>(), {
  show: true,
  selectedMode: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateLegend({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

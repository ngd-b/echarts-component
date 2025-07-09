<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { TooltipComponentOption, TooltipOptions } from "./type";
import { DefaultTooltipOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<TooltipComponentOption>({
  id,
  ...DefaultTooltipOptions,
});
const { updateTooltip } = useVueEcharts();

defineOptions({
  name: "Legend",
});

const props = withDefaults(defineProps<TooltipOptions>(), {
  show: true,
  showContent: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateTooltip({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

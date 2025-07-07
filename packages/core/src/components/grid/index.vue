<script setup lang="tsx">
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";
import type { GridComponentOption, GridOptions } from "./type";
import { DefaultGridOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<GridComponentOption>({
  ...DefaultGridOptions,
});
const { updateGrid } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Grid",
});

const props = withDefaults(defineProps<GridOptions>(), {
  show: true,
  containLabel: false,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateGrid({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

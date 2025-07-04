<script setup lang="tsx">
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";
import type { YAxis, YAXisOption } from "./type";
import { DefaultYAxis } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<YAXisOption>({
  ...DefaultYAxis,
});
const { updateYAxis } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "YAxis",
});

const props = withDefaults(defineProps<YAxis>(), {
  show: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateYAxis({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

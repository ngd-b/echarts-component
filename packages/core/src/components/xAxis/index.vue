<script setup lang="tsx">
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";
import type { XAxis, XAXisOption } from "./type";
import { DefaultXAxis } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<XAXisOption>({
  ...DefaultXAxis,
});
const { updateXAxis } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "XAxis",
});

const props = withDefaults(defineProps<XAxis>(), {
  show: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateXAxis({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

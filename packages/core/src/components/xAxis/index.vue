<script setup lang="tsx">
import { ref, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { XAxis, XAXisOption } from "./type";
import { DefaultXAxis } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<XAXisOption>({
  ...DefaultXAxis,
});
const { updateXAxis } = useVueEcharts();

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

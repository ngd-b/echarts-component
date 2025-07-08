<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { XAxis, XAXisOption } from "./type";
import { DefaultXAxis } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<XAXisOption>({
  id,
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

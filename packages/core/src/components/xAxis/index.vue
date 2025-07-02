<script setup lang="tsx">
import type { XAXisOption } from "echarts/types/dist/shared";
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";

const options = ref<XAXisOption>({
  type: "category",
});
const { updateXAxis } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "XAxis",
});

const props = defineProps<Omit<XAXisOption, "type">>();

watch(
  () => props,
  () => {
    updateXAxis({ ...options.value, ...props });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

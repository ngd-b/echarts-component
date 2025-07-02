<script setup lang="tsx">
import type { YAXisOption } from "echarts/types/dist/shared";
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";

const options = ref<YAXisOption>({
  type: "value",
});
const { updateYAxis } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "XAxis",
});

const props = defineProps<Omit<YAXisOption, "type">>();

watch(
  () => props,
  () => {
    updateYAxis({ ...options.value, ...props });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

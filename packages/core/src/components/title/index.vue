<script setup lang="tsx">
import { inject, ref, watch } from "vue";
import type { Actions } from "../type";
import { VueEcharts } from "../../types/index";
import type { TitleComponentOption, TitleOptions } from "./type";
import { DefaultTitleOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<TitleComponentOption>({
  ...DefaultTitleOptions,
});
const { updateTitle } = inject<Actions>(VueEcharts) as Actions;

defineOptions({
  name: "Title",
});

const props = withDefaults(defineProps<TitleOptions>(), {
  show: true,
  triggerEvent: false,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateTitle({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

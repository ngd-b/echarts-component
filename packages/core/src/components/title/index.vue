<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { TitleComponentOption, TitleOptions } from "./type";
import { DefaultTitleOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<TitleComponentOption>({
  id,
  ...DefaultTitleOptions,
});
const { updateTitle } = useVueEcharts();

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

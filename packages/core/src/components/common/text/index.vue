<script setup lang="tsx">
import { ref, watch } from "vue";
import type { TextCommonOption, TextOptions } from "./type";
import { DefaultTextOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<TextCommonOption>({
  ...DefaultTextOptions,
});

defineOptions({
  name: "Text",
});
const emits = defineEmits<{ change: [TextCommonOption] }>();

const props = withDefaults(defineProps<TextOptions>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    emits("change", { ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText } from "../../hooks/index";
import { TextCommonOption, TextOptions } from "../common/type";
import { DefaultTextStyleOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

defineOptions({
  name: "TextStyle",
  inheritAttrs: false,
});

let options = ref<TextCommonOption>({
  ...DefaultTextStyleOptions,
});
const props = withDefaults(defineProps<TextOptions>(), {});
const { updateTextStyle } = useText();

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    updateTextStyle("textStyle", { ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

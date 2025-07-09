<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText } from "../../../hooks/index";
import type { TextCommonOption, TextOptions } from "./type";
import { DefaultTextOptions } from "./type";
import { omitBy, isUndefined } from "lodash";
import { TextType } from "../../../types/text";

defineOptions({
  name: "Text",
  inheritAttrs: false,
});

let options = ref<TextCommonOption>({
  ...DefaultTextOptions,
});

const props = withDefaults(defineProps<TextOptions & { prop: TextType }>(), {});
const { updateTextStyle } = useText();

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined || "prop");
    updateTextStyle(props.prop, { ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

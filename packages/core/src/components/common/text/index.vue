<script setup lang="tsx">
import { ref, toRaw, watch } from "vue";
import { useText } from "../../../hooks/index";
import type { TextCommonOption, TextOptions } from "./type";
import { DefaultTextOptions } from "./type";
import { omitBy, isUndefined, isBoolean, pickBy } from "lodash";
import { TextType } from "../../../types/text";

defineOptions({
  name: "Text",
  inheritAttrs: false,
});

let options = ref<TextCommonOption>({
  ...DefaultTextOptions,
});

const textContext = useText();

const props = withDefaults(defineProps<TextOptions & { prop: TextType }>(), {
  prop: "textStyle",
  show: () => {
    const textContext = useText();
    if (!textContext) {
      return false;
    }
    return textContext.defaultTextProps
      ? textContext.defaultTextProps()?.show || false
      : false;
  },
});
watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined || "prop");
    textContext.updateTextStyle(props.prop, { ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>

<template></template>

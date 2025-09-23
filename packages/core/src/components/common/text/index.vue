<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText } from "@/hooks/index";
import type { TextCommonOption, TextOptions } from "./type";

import { omitBy, isUndefined } from "lodash-es";
import { TextType } from "@/types/text";

defineOptions({
  name: "Text",
  inheritAttrs: false,
});

let options = ref<TextCommonOption>({});

const textContext = useText();

const props = withDefaults(defineProps<TextOptions & { prop: TextType }>(), {
  prop: "textStyle",
  show: undefined,
  silent: undefined,
  valueAnimation: undefined,
  inside: undefined,
  showMinLabel: undefined,
  showMaxLabel: undefined,
  hideOverlap: undefined,
  richInheritPlainLabel: undefined,
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

<template>
  <slot></slot>
</template>

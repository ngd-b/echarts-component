<script setup lang="tsx">
import { provide, ref, useId, watch } from "vue";
import { useVueEcharts, ECHARTS_TEXT_KEY } from "../../hooks/index";
import type { TitleComponentOption, TitleOptions, TextType } from "./type";
import { DefaultTitleOptions, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";
import { TextContext } from "../../types/text";
import { TextCommonOption } from "../common/type";

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
    options.value = {
      ...options.value,
      ...propsData,
    };
    updateTitle(options.value);
  },
  { immediate: true, deep: true }
);

function updateTextStyle<T extends TextType>(name: T, data: TextCommonOption) {
  options.value[name] = { ...TextMapDefault[name], ...data };
  updateTitle(options.value);
}

provide<TextContext<TextType>>(ECHARTS_TEXT_KEY, {
  updateTextStyle,
});
</script>
<template>
  <slot></slot>
</template>

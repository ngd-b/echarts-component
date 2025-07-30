<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { TitleComponentOption, TitleOptions, TextType } from "./type";
import { DefaultTitleOptions, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<TitleComponentOption>({
  id,
  ...DefaultTitleOptions,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<TitleComponentOption, TextType>({
  options: options,
  update: vueEcharts.updateTitle,
  defaultTextOptions: (name) => {
    if (!name) {
      return {};
    }
    return TextMapDefault[name];
  },
});

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
    vueEcharts.updateTitle(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

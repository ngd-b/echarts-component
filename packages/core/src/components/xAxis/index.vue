<script setup lang="tsx">
import { provide, ref, useId, watch } from "vue";
import { ECHARTS_TEXT_KEY, useVueEcharts } from "../../hooks/index";
import type { TextOptions, TextType, XAxis, XAXisOption } from "./type";
import { DefaultXAxis, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";
import { TextContext } from "../../types/text";

// 组件唯一id
let id = useId();

const options = ref<XAXisOption>({
  id,
  ...DefaultXAxis,
});
const { updateXAxis } = useVueEcharts();

defineOptions({
  name: "XAxis",
});

const props = withDefaults(defineProps<XAxis>(), {
  show: true,
  animation: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    options.value = {
      ...options.value,
      ...propsData,
    };
    updateXAxis(options.value);
  },
  { immediate: true, deep: true }
);

function updateTextStyle<T extends TextType>(name: T, data: TextOptions) {
  options.value[name] = { ...TextMapDefault[name], ...data };
  updateXAxis(options.value);
}

provide<TextContext<TextType>>(ECHARTS_TEXT_KEY, {
  defaultTextProps: {
    show: true,
  },
  updateTextStyle,
});
</script>
<template>
  <slot></slot>
</template>

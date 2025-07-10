<script setup lang="tsx">
import { provide, ref, useId, watch } from "vue";
import { ECHARTS_TEXT_KEY, useVueEcharts } from "../../hooks/index";
import type { TextType, TooltipComponentOption, TooltipOptions } from "./type";
import { DefaultTooltipOptions, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";
import { TextContext } from "../../types/text";
import { TextCommonOption } from "../common/type";

// 组件唯一id
let id = useId();

const options = ref<TooltipComponentOption>({
  id,
  ...DefaultTooltipOptions,
});
const { updateTooltip } = useVueEcharts();

defineOptions({
  name: "Legend",
});

const props = withDefaults(defineProps<TooltipOptions>(), {
  show: true,
  showContent: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    options.value = {
      ...options.value,
      ...propsData,
    };
    updateTooltip(options.value);
  },
  { immediate: true, deep: true }
);

function updateTextStyle<T extends TextType>(name: T, data: TextCommonOption) {
  options.value[name] = { ...TextMapDefault[name], ...data };
  updateTooltip(options.value);
}

provide<TextContext<TextType>>(ECHARTS_TEXT_KEY, {
  updateTextStyle,
});
</script>
<template>
  <slot></slot>
</template>

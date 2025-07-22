<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { TextType, TooltipComponentOption, TooltipOptions } from "./type";
import { DefaultTooltipOptions, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";
// 组件唯一id
let id = useId();

const options = ref<TooltipComponentOption>({
  id,
  ...DefaultTooltipOptions,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
// 增加文本样式
useText<TooltipComponentOption, TextType>({
  options: options,
  update: vueEcharts.updateTooltip,
  defaultTextOptions: (name) => {
    if (!name) {
      return {};
    }
    return TextMapDefault[name];
  },
});

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
    vueEcharts.updateTooltip(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

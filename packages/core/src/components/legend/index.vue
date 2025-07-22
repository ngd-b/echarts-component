<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { LegendComponentOption, LegendOptions, TextType } from "./type";
import { DefaultLegendOptions, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<LegendComponentOption>({
  id,
  ...DefaultLegendOptions,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
// 增加文本样式
useText<LegendComponentOption, TextType>({
  options: options,
  update: vueEcharts.updateLegend,
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

const props = withDefaults(defineProps<LegendOptions>(), {
  show: true,
  selectedMode: true,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    options.value = {
      ...options.value,
      ...propsData,
    };
    vueEcharts.updateLegend(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

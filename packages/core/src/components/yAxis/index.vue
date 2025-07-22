<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { TextType, YAxis, YAXisOption } from "./type";
import { DefaultYAxis, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<YAXisOption>({
  id,
  ...DefaultYAxis,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
// 增加文本样式
useText<YAXisOption, TextType>({
  options: options,
  update: vueEcharts.updateYAxis,
  defaultTextOptions: (name) => {
    if (!name) {
      return {
        show: true,
      };
    }
    return TextMapDefault[name];
  },
});

defineOptions({
  name: "YAxis",
});

const props = withDefaults(defineProps<YAxis>(), {
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
    vueEcharts.updateYAxis(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

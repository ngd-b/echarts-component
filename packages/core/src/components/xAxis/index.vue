<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, XAxis, XAXisOption } from "./type";
import { DefaultXAxis, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<XAXisOption>({
  id,
  ...DefaultXAxis,
});
const vueEcharts = useVueEcharts();
if (!vueEcharts) {
  throw new Error(
    "[Vue Echarts]: useVueEcharts must be used within a valid context."
  );
}
// 增加文本样式
useText<XAXisOption, TextType>({
  options: options,
  update: vueEcharts.updateXAxis,
  defaultTextOptions: (name) => {
    if (!name) {
      return {
        show: true,
      };
    }
    return TextMapDefault[name];
  },
});
// 配置坐标系样式
useAxis<XAXisOption>({
  options: options,
  update: vueEcharts.updateXAxis,
});

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
    vueEcharts.updateXAxis(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

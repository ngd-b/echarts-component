<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
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

// 增加文本样式
useText<YAXisOption, TextType>({
  options: options,
  update,
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
useAxis<YAXisOption>({
  options: options,
  update,
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
    update(options.value);
  },
  { immediate: true, deep: true }
);

/**
 * 更新配置
 * @param data
 */
function update(data: YAXisOption) {
  vueEcharts.update("yAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

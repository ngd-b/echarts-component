<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, XAxis, XAXisOption } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<XAXisOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<XAXisOption, TextType>({
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
useAxis<XAXisOption>({
  options: options,
  update,
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
    update(options.value);
  },
  { immediate: true, deep: true }
);

/**
 * 更新配置
 * @param data
 */
function update(data: XAXisOption) {
  vueEcharts.update("xAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

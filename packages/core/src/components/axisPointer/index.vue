<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useText,
  useStyle,
  useAxisPointer,
} from "../../hooks/index";
import type {
  TextType,
  AxisPointerComponentOption,
  AxisPointerOption,
} from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<AxisPointerComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<AxisPointerComponentOption, TextType>({
  options: options,
  update,
});

useStyle<AxisPointerComponentOption>({
  options: options,
  update,
});

// 特定组件内使用
const axisPointerCtx = useAxisPointer();

defineOptions({
  name: "AxisPointer",
});

const props = withDefaults(defineProps<AxisPointerOption>(), {
  show: undefined,
  snap: undefined,
  status: undefined,
  triggerEmphasis: undefined,
  triggerTooltip: undefined,
  animation: undefined,
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
function update(data: AxisPointerComponentOption) {
  if (axisPointerCtx) {
    axisPointerCtx.update(data);
    return;
  }
  vueEcharts.update("axisPointer", data);
}
</script>
<template>
  <slot></slot>
</template>

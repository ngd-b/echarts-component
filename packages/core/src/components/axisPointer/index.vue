<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, AxisPointer, AxisPointerOption } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<AxisPointerOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<AxisPointerOption, TextType>({
  options: options,
  update,
  defaultTextOptions: (name) => {
    return name ? TextMapDefault[name] : { show: true };
  },
});
// 配置坐标系样式
useAxis<AxisPointerOption>({
  options: options,
  update,
});

defineOptions({
  name: "AxisPointer",
});

const props = withDefaults(defineProps<AxisPointer>(), {
  show: true,
  triggerEmphasis: true,
  triggerTooltip: true,
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
function update(data: AxisPointerOption) {
  vueEcharts.update("axisPointer", data);
}
</script>
<template>
  <slot></slot>
</template>

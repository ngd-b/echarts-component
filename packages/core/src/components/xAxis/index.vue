<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, XAXisComponentOption, XAXisOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<XAXisComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<XAXisComponentOption, TextType>({
  options: options,
  update,
});
// 配置坐标系样式
useAxis<XAXisComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "XAxis",
});

const props = withDefaults(defineProps<XAXisOption>(), {
  type: undefined,
  show: true,
  animation: undefined,
  boundaryGap: undefined,
  scale: undefined,
  alignTicks: undefined,
  deduplication: undefined,
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
function update(data: XAXisComponentOption) {
  vueEcharts.update("xAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

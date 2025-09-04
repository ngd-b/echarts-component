<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useText,
  useAxis,
  useTooltip,
  useAxisPointer,
} from "../../hooks/index";
import type { TextType, YAXisComponentOption, YAXisOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<YAXisComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<YAXisComponentOption, TextType>({
  options: options,
  update,
});

// 配置坐标系样式
useAxis<YAXisComponentOption>({
  options: options,
  update,
});

useTooltip({
  options: options,
  update,
});

useAxisPointer({
  options: options,
  update,
});

defineOptions({
  name: "YAxis",
});

const props = withDefaults(defineProps<YAXisOption>(), {
  type: undefined,
  show: undefined,
  animation: undefined,
  boundaryGap: undefined,
  scale: undefined,
  alignTicks: undefined,
  deduplication: undefined,
  inverse: undefined,
  triggerEvent: undefined,
  silent: undefined,
});

watch(
  () => props,
  () => {
    let propsData: YAXisOption = omitBy(props, isUndefined);

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
function update(data: YAXisComponentOption) {
  vueEcharts.update("yAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

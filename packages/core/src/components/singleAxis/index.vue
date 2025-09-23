<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useText,
  useAxis,
  useTooltip,
  useAxisPointer,
} from "@/hooks/index";
import type {
  TextType,
  SingleAxisComponentOption,
  SingleAxisOption,
} from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<SingleAxisComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<SingleAxisComponentOption, TextType>({
  options: options,
  update,
});
// 配置坐标系样式
useAxis<SingleAxisComponentOption>({
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
  name: "SingleAxis",
});

const props = withDefaults(defineProps<SingleAxisOption>(), {
  show: undefined,
  inverse: undefined,
  boundaryGap: undefined,
  scale: undefined,
  silent: undefined,
  triggerEvent: undefined,
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
function update(data: SingleAxisComponentOption) {
  vueEcharts.update("singleAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

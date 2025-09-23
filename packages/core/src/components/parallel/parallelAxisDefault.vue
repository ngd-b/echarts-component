<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText, useAxis, useParallel, useTooltip } from "@/hooks/index";
import type {
  TextType,
  ParallelAxisOption,
  ParallelAxisComponentOption,
} from "./type";
import { omitBy, isUndefined } from "lodash-es";

const parallel = useParallel();

const options = ref<ParallelAxisComponentOption>({});

// 增加文本样式
useText<ParallelAxisComponentOption, TextType>({
  options: options,
  update,
});
// 配置坐标系样式
useAxis<ParallelAxisComponentOption>({
  options: options,
  update,
});

useTooltip({
  options: options,
  update,
});

defineOptions({
  name: "ParallelAxisDefault",
});

const props = withDefaults(defineProps<ParallelAxisOption>(), {
  type: undefined,
  show: undefined,
  animation: undefined,
  boundaryGap: undefined,
  scale: undefined,
  silent: undefined,
  triggerEvent: undefined,
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
function update(data: ParallelAxisComponentOption) {
  parallel.updateParallel("parallelAxisDefault", data);
}
</script>
<template>
  <slot></slot>
</template>

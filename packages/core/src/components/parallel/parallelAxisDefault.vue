<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useText, useAxis, useParallel } from "../../hooks/index";
import type {
  TextType,
  ParallelAxisOption,
  ParallelAxisComponentOption,
} from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const parallel = useParallel();

const options = ref<ParallelAxisComponentOption>({
  id,
});

// 增加文本样式
useText<ParallelAxisComponentOption, TextType>({
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
useAxis<ParallelAxisComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "ParallelAxisDefault",
});

const props = withDefaults(defineProps<ParallelAxisOption>(), {
  type: "value",
  show: true,
  animation: true,
  boundaryGap: null,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    if (propsData.boundaryGap === null) {
      propsData.boundaryGap = props.type === "category";
    }
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

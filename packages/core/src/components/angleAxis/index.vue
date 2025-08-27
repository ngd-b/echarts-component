<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type {
  TextType,
  AngleAxisComponentOption,
  AngleAxisOption,
} from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<AngleAxisComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<AngleAxisComponentOption, TextType>({
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
useAxis<AngleAxisComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "AngleAxis",
});

const props = withDefaults(defineProps<AngleAxisOption>(), {
  show: undefined,
  clockwise: undefined,
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
function update(data: AngleAxisComponentOption) {
  vueEcharts.update("angleAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

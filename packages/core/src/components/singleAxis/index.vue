<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, SingleAxis, SingleAxisOption } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<SingleAxisOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<SingleAxisOption, TextType>({
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
useAxis<SingleAxisOption>({
  options: options,
  update,
});

defineOptions({
  name: "SingleAxis",
});

const props = withDefaults(defineProps<SingleAxis>(), {
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
function update(data: SingleAxisOption) {
  vueEcharts.update("singleAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

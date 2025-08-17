<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, AngleAxis, AngleAxisOption } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<AngleAxisOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<AngleAxisOption, TextType>({
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
useAxis<AngleAxisOption>({
  options: options,
  update,
});

defineOptions({
  name: "AngleAxis",
});

const props = withDefaults(defineProps<AngleAxis>(), {
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
function update(data: AngleAxisOption) {
  vueEcharts.update("angleAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

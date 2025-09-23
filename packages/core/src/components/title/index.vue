<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { TitleComponentOption, TitleOptions, TextType } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<TitleComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<TitleComponentOption, TextType>({
  options: options,
  update,
});

defineOptions({
  name: "Title",
});

const props = withDefaults(defineProps<TitleOptions>(), {
  show: undefined,
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
function update(data: TitleComponentOption) {
  vueEcharts.update("title", data);
}
</script>
<template>
  <slot></slot>
</template>

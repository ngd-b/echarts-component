<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useStyle } from "../../hooks/index";
import type { TextType, TimelineOption, TimelineComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<TimelineComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<TimelineComponentOption, TextType>({
  options: options,
  update,
});

useStyle<TimelineComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "Timeline",
});

const props = withDefaults(defineProps<TimelineOption>(), {
  show: undefined,
  autoPlay: undefined,
  rewind: undefined,
  loop: undefined,
  realtime: undefined,
  inverse: undefined,
  symbolKeepAspect: undefined,
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
function update(data: TimelineComponentOption) {
  vueEcharts.update("timeline", data);
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, RadarComponentOption, RadarOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<RadarComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<RadarComponentOption, TextType>({
  options: options,
  update,
});
// 配置坐标系样式
useAxis<RadarComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "RadarAxis",
});

const props = withDefaults(defineProps<RadarOption>(), {
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
function update(data: RadarComponentOption) {
  vueEcharts.update("radar", data);
}
</script>
<template>
  <slot></slot>
</template>

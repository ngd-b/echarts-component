<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText } from "../../hooks/index";
import type { TextType, TooltipComponentOption, TooltipOptions } from "./type";
import { omitBy, isUndefined } from "lodash";
// 组件唯一id
let id = useId();

const options = ref<TooltipComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<TooltipComponentOption, TextType>({
  options: options,
  update,
});

defineOptions({
  name: "Tooltip",
});

const props = withDefaults(defineProps<TooltipOptions>(), {
  show: undefined,
  showContent: undefined,
  alwaysShowContent: undefined,
  enterable: undefined,
  confine: undefined,
  appendToBody: undefined,
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
function update(data: TooltipComponentOption) {
  vueEcharts.update("tooltip", data);
}
</script>
<template>
  <slot></slot>
</template>

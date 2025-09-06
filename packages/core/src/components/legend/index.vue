<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useText,
  useStyle,
  useTooltip,
  useEmphasis,
} from "../../hooks/index";
import type { LegendComponentOption, LegendOptions, TextType } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<LegendComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<LegendComponentOption, TextType>({
  options: options,
  update,
});

useStyle<LegendComponentOption>({
  options: options,
  update,
});

useTooltip({
  options: options,
  update,
});

useEmphasis({
  options,
  update,
});

defineOptions({
  name: "Legend",
});

const props = withDefaults(defineProps<LegendOptions>(), {
  show: undefined,
  selectedMode: undefined,
  animation: undefined,
  //selector: undefined,
  triggerEvent: undefined,
  symbolKeepAspect: undefined,
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
function update(data: LegendComponentOption) {
  vueEcharts.update("legend", data);
}
</script>
<template>
  <slot></slot>
</template>

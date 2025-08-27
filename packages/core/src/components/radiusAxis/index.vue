<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type {
  TextType,
  RadiusAxisComponentOption,
  RadiusAxisOption,
} from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<RadiusAxisComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<RadiusAxisComponentOption, TextType>({
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
useAxis<RadiusAxisComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "RadiusAxis",
});

const props = withDefaults(defineProps<RadiusAxisOption>(), {
  show: undefined,
  inverse: undefined,
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
function update(data: RadiusAxisComponentOption) {
  vueEcharts.update("radiusAxis", data);
}
</script>
<template>
  <slot></slot>
</template>

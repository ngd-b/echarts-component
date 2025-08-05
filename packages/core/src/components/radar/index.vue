<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, Radar, RadarOption } from "./type";
import { DefaultRadar, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<RadarOption>({
  id,
  ...DefaultRadar,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<RadarOption, TextType>({
  options: options,
  update: vueEcharts.updateRadar,
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
useAxis<RadarOption>({
  options: options,
  update: vueEcharts.updateRadar,
});

defineOptions({
  name: "RadarAxis",
});

const props = withDefaults(defineProps<Radar>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    options.value = {
      ...options.value,
      ...propsData,
    };
    vueEcharts.updateRadar(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

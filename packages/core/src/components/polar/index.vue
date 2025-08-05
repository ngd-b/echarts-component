<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import { omitBy, isUndefined } from "lodash";
import type { Polar, PolarOption } from "./type";
import { DefaultPolar } from "./type";

// 组件唯一id
let id = useId();

const options = ref<PolarOption>({
  id,
  ...DefaultPolar,
});
const vueEcharts = useVueEcharts();

// 配置坐标系样式
useAxis<PolarOption>({
  options: options,
  update: vueEcharts.updatePolar,
});

defineOptions({
  name: "PolarAxis",
});

const props = withDefaults(defineProps<Polar>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    options.value = {
      ...options.value,
      ...propsData,
    };
    vueEcharts.updatePolar(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

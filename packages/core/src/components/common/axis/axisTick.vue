<script setup lang="tsx">
import { ref, watch } from "vue";
import { AxisTickOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "@/hooks";
import { AxisType } from "@/types";

const prop: AxisType = "axisTick";

defineOptions({
  name: "AxisTick",
  inheritAttrs: false,
});

let options = ref<AxisTickOption>({});
const props = withDefaults(defineProps<Omit<AxisTickOption, "lineStyle">>(), {
  show: undefined,
  alignWithLabel: undefined,
  inside: undefined,
});

const axisContext = useAxis();
// 提供子级服务
useStyle<AxisTickOption>({
  options: options,
  update: (data) => axisContext.updateAxisStyle(prop, data),
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext.updateAxisStyle(prop, options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

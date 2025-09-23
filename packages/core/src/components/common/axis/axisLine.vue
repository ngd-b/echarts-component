<script setup lang="tsx">
import { ref, watch } from "vue";
import { AxisLineOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "@/hooks";
import { AxisType } from "@/types";

const prop: AxisType = "axisLine";

defineOptions({
  name: "AxisLine",
  inheritAttrs: false,
});

let options = ref<AxisLineOption>({});
const props = withDefaults(defineProps<Omit<AxisLineOption, "lineStyle">>(), {
  show: undefined,
  onZero: undefined,
  roundCap: undefined,
});

const axisContext = useAxis();
// 提供子级服务
useStyle<AxisLineOption>({
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

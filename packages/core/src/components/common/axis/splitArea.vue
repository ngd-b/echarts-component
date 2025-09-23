<script setup lang="tsx">
import { ref, watch } from "vue";
import { SplitAreaOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "../../../hooks";
import { AxisType } from "../../../types";

const prop: AxisType = "splitArea";

defineOptions({
  name: "SplitArea",
  inheritAttrs: false,
});

let options = ref<SplitAreaOption>({});
const props = withDefaults(defineProps<Omit<SplitAreaOption, "areaStyle">>(), {
  show: undefined,
});

const axisContext = useAxis();
// 提供子级服务
useStyle<SplitAreaOption>({
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

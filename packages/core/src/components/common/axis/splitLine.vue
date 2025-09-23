<script setup lang="tsx">
import { ref, watch } from "vue";
import { SplitLineOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "@/hooks";
import { AxisType } from "@/types";

const prop: AxisType = "splitLine";

defineOptions({
  name: "SplitLine",
  inheritAttrs: false,
});

let options = ref<SplitLineOption>({});
const props = withDefaults(defineProps<Omit<SplitLineOption, "lineStyle">>(), {
  show: undefined,
  showMinLine: undefined,
  showMaxLine: undefined,
});

const axisContext = useAxis();
// 提供子级服务
useStyle<SplitLineOption>({
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

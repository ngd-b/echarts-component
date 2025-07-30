<script setup lang="tsx">
import { ref, watch } from "vue";
import { SplitLineOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks/useAxis";
import { AxisType } from "../../../types";

const prop: AxisType = "splitLine";

let options = ref<SplitLineOption>({
  show: true,
  showMinLine: true,
  showMaxLine: true,
  interval: "auto",
});
const props = withDefaults(defineProps<Omit<SplitLineOption, "lineStyle">>(), {
  show: true,
  showMinLine: true,
  showMaxLine: true,
});

const axisContext = useAxis();
// 提供子级服务
useAxis<SplitLineOption>({
  options: options,
  defaultAxisLineStyle: {
    color: ["#ccc"],
  },
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

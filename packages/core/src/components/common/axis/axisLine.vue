<script setup lang="tsx">
import { ref, watch } from "vue";
import { AxisLineOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks/useAxis";

let options = ref<AxisLineOption>({
  symbol: "none",
  symbolSize: [10, 15],
  symbolOffset: [0, 0],
});
const props = withDefaults(defineProps<Omit<AxisLineOption, "lineStyle">>(), {
  show: true,
  onZero: true,
});

const axisContext = useAxis();
// 提供子级服务
useAxis<AxisLineOption>({
  options: options,
  update: (data) => axisContext?.updateAxisStyle("axisLine", data),
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    axisContext?.updateAxisStyle("axisLine", {
      ...options.value,
      ...propsData,
    });
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

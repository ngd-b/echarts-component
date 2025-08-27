<script setup lang="tsx">
import { ref, watch } from "vue";
import { AxisTickOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks/useAxis";
import { AxisType } from "../../../types";

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
useAxis<AxisTickOption>({
  options: options,
  defaultAxisLineStyle: {
    color: "",
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

<script setup lang="tsx">
import { ref, watch } from "vue";
import { MinorTickOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks/useAxis";
import { AxisType } from "../../../types";

const prop: AxisType = "minorTick";

let options = ref<MinorTickOption>({
  show: false,
  splitNumber: 5,
  length: 3,
});
const props = withDefaults(
  defineProps<Omit<MinorTickOption, "lineStyle">>(),
  {}
);

const axisContext = useAxis();
// 提供子级服务
useAxis<MinorTickOption>({
  options: options,
  defaultAxisLineStyle: {
    color: "",
  },
  update: (data) => axisContext?.updateAxisStyle(prop, data),
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext?.updateAxisStyle(prop, options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

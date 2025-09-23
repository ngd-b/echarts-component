<script setup lang="tsx">
import { ref, watch } from "vue";
import { MinorTickOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "../../../hooks";
import { AxisType } from "../../../types";

const prop: AxisType = "minorTick";

defineOptions({
  name: "MinorTick",
  inheritAttrs: false,
});

let options = ref<MinorTickOption>({});
const props = withDefaults(defineProps<Omit<MinorTickOption, "lineStyle">>(), {
  show: undefined,
});

const axisContext = useAxis();
// 提供子级服务
useStyle<MinorTickOption>({
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

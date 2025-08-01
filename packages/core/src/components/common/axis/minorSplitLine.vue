<script setup lang="tsx">
import { ref, watch } from "vue";
import { MinorSplitLineOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks/useAxis";
import { AxisType } from "../../../types";

const prop: AxisType = "minorSplitLine";

defineOptions({
  name: "MinorSplitLine",
  inheritAttrs: false,
});

let options = ref<MinorSplitLineOption>({
  show: true,
});
const props = withDefaults(
  defineProps<Omit<MinorSplitLineOption, "lineStyle">>(),
  {
    show: true,
  }
);

const axisContext = useAxis();
// 提供子级服务
useAxis<MinorSplitLineOption>({
  options: options,
  defaultAxisLineStyle: {
    color: "#eee",
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

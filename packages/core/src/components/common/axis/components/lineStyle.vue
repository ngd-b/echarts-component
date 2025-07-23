<script setup lang="tsx">
import { ref, watch } from "vue";
import { LineStyleOption } from "../type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../../hooks/index";

const axisContext = useAxis();

let options = ref<LineStyleOption>({
  color: "#333",
  width: 1,
  type: "solid",
  dashOffset: 0,
  cap: "butt",
  join: "bevel",
  miterLimit: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  opacity: 1,
  ...axisContext?.defaultAxisLineStyle,
});

const props = withDefaults(defineProps<LineStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext?.updateAxisLineStyle(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

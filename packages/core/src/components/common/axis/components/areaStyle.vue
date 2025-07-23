<script setup lang="tsx">
import { ref, watch } from "vue";
import { AreaStyleOption, ZRColor } from "../type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../../hooks/index";

const axisContext = useAxis();

let options = ref<AreaStyleOption<ZRColor | ZRColor[]>>({
  color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  opacity: 1,
  ...axisContext?.defaultAxisAreaStyle,
});

const props = withDefaults(defineProps<AreaStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext?.updateAxisAreaStyle(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

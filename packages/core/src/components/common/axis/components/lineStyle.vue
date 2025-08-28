<script setup lang="tsx">
import { ref, watch } from "vue";
import { LineStyleOption, ZRColor } from "../type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../../hooks/index";

defineOptions({
  name: "LineStyle",
  inheritAttrs: false,
});

const axisContext = useAxis();

let options = ref<LineStyleOption<ZRColor | ZRColor[]>>({});

const props = withDefaults(defineProps<LineStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext.updateAxisLineStyle(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

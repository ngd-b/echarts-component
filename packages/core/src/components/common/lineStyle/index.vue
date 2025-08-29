<script setup lang="tsx">
import { ref, watch } from "vue";
import { LineStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "LineStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<LineStyleOption>({});

const props = withDefaults(defineProps<LineStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("lineStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

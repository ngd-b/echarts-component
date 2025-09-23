<script setup lang="tsx">
import { ref, watch } from "vue";
import { EmptyCircleStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "EmptyCircleStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<EmptyCircleStyleOption>({});

const props = withDefaults(defineProps<EmptyCircleStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("emptyCircleStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

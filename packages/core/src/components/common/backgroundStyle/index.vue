<script setup lang="tsx">
import { ref, watch } from "vue";
import { BackgroundStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "BackgroundStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<BackgroundStyleOption>({});

const props = withDefaults(defineProps<BackgroundStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("backgroundStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

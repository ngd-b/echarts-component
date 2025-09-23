<script setup lang="tsx">
import { ref, watch } from "vue";
import { ItemStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "WindowStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<ItemStyleOption>({});

const props = withDefaults(defineProps<ItemStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("windowStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

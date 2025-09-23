<script setup lang="tsx">
import { ref, watch } from "vue";
import { HandleStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "@/hooks/index";

defineOptions({
  name: "Handle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<HandleStyleOption>({});

const props = withDefaults(defineProps<HandleStyleOption>(), {
  show: undefined,
});
watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("handle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

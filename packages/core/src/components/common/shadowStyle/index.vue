<script setup lang="tsx">
import { ref, watch } from "vue";
import { ShadowStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "ShadowStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<ShadowStyleOption>({});

const props = withDefaults(defineProps<ShadowStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("shadowStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

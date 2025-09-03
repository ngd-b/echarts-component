<script setup lang="tsx">
import { ref, watch } from "vue";
import { AreaStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "ShadowStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<AreaStyleOption>({});

const props = withDefaults(defineProps<AreaStyleOption>(), {});

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

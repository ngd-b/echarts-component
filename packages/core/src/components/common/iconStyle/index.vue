<script setup lang="tsx">
import { ref, watch } from "vue";
import { IcontyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "../../../hooks/index";

defineOptions({
  name: "IconStyle",
  inheritAttrs: false,
});

const styleContext = useStyle();

let options = ref<IcontyleOption>({});

const props = withDefaults(defineProps<IcontyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    styleContext.update("iconStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

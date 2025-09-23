<script setup lang="tsx">
import { ref, watch } from "vue";
import { LineStyleOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle } from "@/hooks/index";

defineOptions({
  name: "DividerLineStyle",
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
    styleContext.update("dividerLineStyle", options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

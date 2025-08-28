<script setup lang="tsx">
import { ref, watch } from "vue";
import { AreaStyleOption, ZRColor } from "../type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../../hooks/index";

defineOptions({
  name: "AreaStyle",
  inheritAttrs: false,
});

const axisContext = useAxis();

let options = ref<AreaStyleOption<ZRColor | ZRColor[]>>({});

const props = withDefaults(defineProps<AreaStyleOption>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    axisContext.updateAxisAreaStyle(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

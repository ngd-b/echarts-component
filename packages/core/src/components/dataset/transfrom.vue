<script setup lang="tsx">
import { ref, watch, useId } from "vue";
import { DatasetTransformOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useTransform } from "@/hooks/index";

const id = useId();

defineOptions({
  name: "Transform",
  inheritAttrs: false,
});

let options = ref<DatasetTransformOption>({
  id,
  type: "filter",
});

const transformCtx = useTransform();

const props = withDefaults(
  defineProps<Omit<DatasetTransformOption, "id">>(),
  {}
);

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    transformCtx.update(options.value);
  },
  { immediate: true, deep: true }
);
</script>
<template></template>

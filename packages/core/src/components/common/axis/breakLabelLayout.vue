<script setup lang="tsx">
import { ref, watch } from "vue";
import {
  BreakLabelLayoutComponentOption,
  BreakLabelLayoutOption,
} from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis } from "@/hooks";

defineOptions({
  name: "BreakLabelLayout",
  inheritAttrs: false,
});

let options = ref<BreakLabelLayoutComponentOption>({});
const props = withDefaults(defineProps<BreakLabelLayoutOption>(), {});

const axisContext = useAxis();

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
    update(options.value);
  },
  { immediate: true, deep: true }
);

/**
 * 更新配置
 * @param data
 */
function update(data: BreakLabelLayoutComponentOption) {
  axisContext.updateAxisStyle("breakLabelLayout", data);
}
</script>
<template></template>

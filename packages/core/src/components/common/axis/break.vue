<script setup lang="tsx">
import { ref, watch, useId } from "vue";
import { BreakComponentOption, BreakOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useAxis } from "../../../hooks";

const id = useId();

defineOptions({
  name: "Break",
  inheritAttrs: false,
});

let options = ref<BreakComponentOption>({
  id,
  start: "",
  end: "",
});
const props = withDefaults(defineProps<BreakOption>(), {
  isExpanded: undefined,
});

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
function update(data: BreakComponentOption) {
  axisContext.updateMulti("breaks", data);
}
</script>
<template></template>

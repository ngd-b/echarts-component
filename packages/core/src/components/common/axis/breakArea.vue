<script setup lang="tsx">
import { ref, watch } from "vue";
import { BreakAreaComponentOption, BreakAreaOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useAxis, useStyle } from "@/hooks";

defineOptions({
  name: "BreakArea",
  inheritAttrs: false,
});

let options = ref<BreakAreaComponentOption>({
  zigzagZ: 100,
});
const props = withDefaults(defineProps<BreakAreaOption>(), {
  show: undefined,
  expandOnClick: undefined,
});

const axisContext = useAxis();

useStyle({
  options,
  update,
});

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
function update(data: BreakAreaComponentOption) {
  axisContext.updateAxisStyle("breakArea", data);
}
</script>
<template>
  <slot></slot>
</template>

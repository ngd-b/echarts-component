<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../hooks/index";
import type { GridComponentOption, GridOptions } from "./type";
import { DefaultGridOptions } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<GridComponentOption>({
  id,
  ...DefaultGridOptions,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Grid",
});

const props = withDefaults(defineProps<GridOptions>(), {
  show: true,
  containLabel: false,
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    update({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);

/**
 * 更新配置
 * @param data
 */
function update(data: GridComponentOption) {
  vueEcharts.update("grid", data);
}
</script>
<template></template>

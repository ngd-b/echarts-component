<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useTooltip } from "../../hooks/index";
import type { GridComponentOption, GridOptions } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<GridComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

useTooltip({
  options: options,
  update,
});

defineOptions({
  name: "Grid",
});

const props = withDefaults(defineProps<GridOptions>(), {
  show: undefined,
  containLabel: undefined,
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
<template>
  <slot></slot>
</template>

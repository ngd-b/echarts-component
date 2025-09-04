<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useAxis } from "../../hooks/index";
import type { BrushOption, BrushComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<BrushComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 配置坐标系样式
useAxis<BrushComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "Brush",
});

const props = withDefaults(defineProps<BrushOption>(), {
  transformable: undefined,
  removeOnClick: undefined,
  bmapIndex: undefined,
  brushType: undefined,
  geoIndex: undefined,
  gridIndex: undefined,
  seriesIndex: undefined,
  xAxisIndex: undefined,
  yAxisIndex: undefined,
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
function update(data: BrushComponentOption) {
  vueEcharts.update("brush", data);
}
</script>
<template>
  <slot></slot>
</template>

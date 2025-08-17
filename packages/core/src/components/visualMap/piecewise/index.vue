<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../../hooks/index";
import type { PiecewiseVisualMap, PiecewiseVisualMapOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<PiecewiseVisualMapOption>({
  id,
  type: "piecewise",
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "PiecewiseVisualMap",
});

const props = withDefaults(defineProps<PiecewiseVisualMap>(), {
  show: true,
  brushSelect: true,
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
function update(data: PiecewiseVisualMapOption) {
  vueEcharts.update("visualMap", data);
}
</script>
<template></template>

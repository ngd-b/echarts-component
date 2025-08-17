<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../../hooks/index";
import type { InsideDataZoom, InsideDataZoomOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<InsideDataZoomOption>({
  id,
  type: "inside",
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "InsideDataZoom",
});

const props = withDefaults(defineProps<InsideDataZoom>(), {
  zoomOnMouseWheel: true,
  moveOnMouseMove: true,
  moveOnMouseWheel: true,
  preventDefaultMouseMove: true,
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
function update(data: InsideDataZoomOption) {
  vueEcharts.update("dataZoom", data);
}
</script>
<template></template>

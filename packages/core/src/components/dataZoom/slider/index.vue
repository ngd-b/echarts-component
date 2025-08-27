<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "../../../hooks/index";
import type { SliderDataZoom, SliderDataZoomOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<SliderDataZoomOption>({
  id,
  type: "slider",
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "SliderDataZoom",
});

const props = withDefaults(defineProps<SliderDataZoom>(), {
  show: undefined,
  brushSelect: undefined,
  showDetail: undefined,
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
function update(data: SliderDataZoomOption) {
  vueEcharts.update("dataZoom", data);
}
</script>
<template></template>

<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts } from "@/hooks/index";
import type { ContinousVisualMap, ContinousVisualMapOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<ContinousVisualMapOption>({
  id,
  type: "continuous",
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "ContinousVisualMap",
});

const props = withDefaults(defineProps<ContinousVisualMap>(), {
  show: undefined,
  realtime: undefined,
  hoverLink: undefined,
  calculable: undefined,
  inverse: undefined,
  hoverLinkOnHandle: undefined,
  unboundedRange: undefined,
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
function update(data: ContinousVisualMapOption) {
  vueEcharts.update("visualMap", data);
}
</script>
<template></template>

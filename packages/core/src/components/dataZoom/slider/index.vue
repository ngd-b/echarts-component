<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useEmphasis,
  useSlider,
  useStyle,
  useText,
} from "../../../hooks/index";
import type {
  SliderDataZoomOption,
  SliderDataZoomComponentOption,
} from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<SliderDataZoomComponentOption>({
  id,
  type: "slider",
});
const vueEcharts = useVueEcharts();

useSlider({
  options,
  update,
});

useEmphasis({
  options,
  update,
});

useStyle({
  options,
  update,
});

useText({
  options,
  update,
});

defineOptions({
  name: "SliderDataZoom",
});

const props = withDefaults(defineProps<SliderDataZoomOption>(), {
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
function update(data: SliderDataZoomComponentOption) {
  vueEcharts.update("dataZoom", data);
}
</script>
<template></template>

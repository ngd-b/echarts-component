<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useStyle,
  useTooltip,
  useEmphasis,
  useSelect,
  useBlur,
  useText,
  useRegion,
} from "../../hooks/index";
import type { GeoOption, GeoComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<GeoComponentOption>({
  id,
  map: "",
});
const vueEcharts = useVueEcharts();

useText({
  options,
  update,
});

// 配置坐标系样式
useStyle({
  options,
  update,
});

useTooltip({
  options,
  update,
});

useEmphasis({
  options,
  update,
});

useSelect({
  options,
  update,
});

useBlur({
  options,
  update,
});

useRegion({
  options,
  update,
});

defineOptions({
  name: "Geo",
});

const props = withDefaults(defineProps<GeoOption>(), {
  show: undefined,
  roam: undefined,
  selectedMode: undefined,
  preserveAspect: undefined,
  clip: undefined,
  silent: undefined,
  animation: undefined,
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
function update(data: GeoComponentOption) {
  vueEcharts.update("geo", data);
}
</script>
<template>
  <slot></slot>
</template>

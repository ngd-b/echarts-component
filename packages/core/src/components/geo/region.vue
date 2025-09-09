<script setup lang="tsx">
import { ref, watch } from "vue";
import {
  useStyle,
  useTooltip,
  useEmphasis,
  useSelect,
  useBlur,
  useText,
  useRegion,
} from "../../hooks/index";
import type { GeoRegionOption, GeoRegionComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<GeoRegionComponentOption>({});

const regionCtx = useRegion();

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

defineOptions({
  name: "Region",
});

const props = withDefaults(defineProps<GeoRegionOption>(), {
  selected: undefined,
  silent: undefined,
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
function update(data: GeoRegionComponentOption) {
  regionCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

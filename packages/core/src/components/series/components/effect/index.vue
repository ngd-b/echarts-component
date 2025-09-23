<script setup lang="tsx">
import { ref, watch } from "vue";
import { useStyle, useSeriesOption } from "../../../../hooks/index";
import type { EffectComponentOption, EffectOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<EffectComponentOption>({});

const seriesOption = useSeriesOption();

// 配置坐标系样式
useStyle({
  options,
  update,
});

defineOptions({
  name: "Effect",
});

const props = withDefaults(defineProps<EffectOption>(), {
  show: undefined,
  loop: undefined,
  roundTrip: undefined,
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
function update(data: EffectComponentOption) {
  seriesOption.update("effect", data);
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, watch } from "vue";
import { LabelLineComponentOption, LabelLineOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle, useSeriesOption } from "@/hooks/index";

defineOptions({
  name: "LabelLine",
  inheritAttrs: false,
});

let options = ref<LabelLineComponentOption>({});

const seriesOption = useSeriesOption();

useStyle({
  options,
  update,
});

const props = withDefaults(defineProps<LabelLineOption>(), {
  show: undefined,
  showAbove: undefined,
  smooth: undefined,
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
function update(data: LabelLineComponentOption) {
  seriesOption.update("labelLine", data);
}
</script>
<template>
  <slot></slot>
</template>

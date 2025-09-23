<script setup lang="tsx">
import { ref, watch } from "vue";
import { LabelLayoutComponentOption, LabelLayoutOption } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle, useSeriesOption } from "@/hooks/index";

defineOptions({
  name: "LabelLayout",
  inheritAttrs: false,
});

let options = ref<LabelLayoutComponentOption>({});

const seriesOption = useSeriesOption();

useStyle({
  options,
  update,
});

const props = withDefaults(defineProps<LabelLayoutOption>(), {
  hideOverlap: undefined,
  draggable: undefined,
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
function update(data: LabelLayoutComponentOption) {
  seriesOption.update("labelLayout", data);
}
</script>
<template>
  <slot></slot>
</template>

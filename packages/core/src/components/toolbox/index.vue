<script setup lang="tsx">
import { computed, ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useStyle,
  useTooltip,
  useFeature,
} from "../../hooks/index";
import type { ToolboxOption, ToolboxComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<ToolboxComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

const feature = computed(() => options.value.feature || {});

useStyle({
  options: options,
  update,
});

useTooltip({
  options: options,
  update,
});

useFeature({
  options: feature,
  update(data) {
    options.value.feature = data;
    update(options.value);
  },
});

defineOptions({
  name: "Toolbox",
});

const props = withDefaults(defineProps<ToolboxOption>(), {
  show: undefined,
  showTitle: undefined,
  triggerEmphasis: undefined,
  triggerTooltip: undefined,
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
function update(data: ToolboxComponentOption) {
  vueEcharts.update("toolbox", data);
}
</script>
<template>
  <slot></slot>
</template>

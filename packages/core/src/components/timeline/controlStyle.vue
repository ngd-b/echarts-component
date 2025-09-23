<script setup lang="tsx">
import { ref, watch } from "vue";
import { useTimeline } from "../../hooks/index";
import type { ControlStyleComponentOption, ControlStyleOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<ControlStyleComponentOption>({});

const timelineCtx = useTimeline();

defineOptions({
  name: "ControlStyle",
});

const props = withDefaults(defineProps<ControlStyleOption>(), {
  show: undefined,
  showPlayBtn: undefined,
  showPrevBtn: undefined,
  showNextBtn: undefined,
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
function update(data: ControlStyleComponentOption) {
  timelineCtx.update("controlStyle", data);
}
</script>
<template></template>

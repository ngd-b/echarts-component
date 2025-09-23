<script setup lang="tsx">
import { ref, watch } from "vue";
import { useTimeline } from "@/hooks/index";
import type {
  CheckpointStyleComponentOption,
  CheckpointStyleOption,
} from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<CheckpointStyleComponentOption>({});

const timelineCtx = useTimeline();

defineOptions({
  name: "CheckpointStyle",
});

const props = withDefaults(defineProps<CheckpointStyleOption>(), {
  symbolKeepAspect: undefined,
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
function update(data: CheckpointStyleComponentOption) {
  timelineCtx.update("checkpointStyle", data);
}
</script>
<template></template>

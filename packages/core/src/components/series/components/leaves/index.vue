<script setup lang="tsx">
import { ref, watch } from "vue";
import {
  useStyle,
  useSeriesOption,
  useText,
  useSelect,
  useEmphasis,
  useBlur,
} from "@/hooks/index";
import type { LeavesComponentOption, LeavesOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<LeavesComponentOption>({});

const seriesOption = useSeriesOption();

// 配置坐标系样式
useStyle({
  options,
  update,
});

useText({
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
  name: "Leaves",
});

const props = withDefaults(defineProps<LeavesOption>(), {});

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
function update(data: LeavesComponentOption) {
  seriesOption.update("leaves", data);
}
</script>
<template>
  <slot></slot>
</template>

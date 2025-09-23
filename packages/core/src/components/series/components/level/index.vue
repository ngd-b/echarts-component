<script setup lang="tsx">
import { ref, watch, useId } from "vue";
import {
  useStyle,
  useSeriesOption,
  useText,
  useSelect,
  useEmphasis,
  useBlur,
} from "@/hooks/index";
import type { LevelComponentOption, LevelOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const id = useId();

const options = ref<LevelComponentOption>({
  id,
});

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
  name: "Level",
});

const props = withDefaults(defineProps<LevelOption>(), {});

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
function update(data: LevelComponentOption) {
  seriesOption.updateMulti("levels", data);
}
</script>
<template>
  <slot></slot>
</template>

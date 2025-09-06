<script setup lang="tsx">
import { ref, watch } from "vue";
import { MarkLineComponentOption, MarkLineOption, TextType } from "./type";
import { isUndefined, omitBy } from "lodash";
import {
  useStyle,
  useMark,
  useText,
  useEmphasis,
  useBlur,
} from "../../../hooks/index";

defineOptions({
  name: "MarkLine",
  inheritAttrs: false,
});

let options = ref<MarkLineComponentOption>({});

const markCtx = useMark();

useStyle({
  options,
  update,
});

useText<MarkLineComponentOption, TextType>({
  options: options,
  update,
});

useEmphasis({
  options,
  update,
});

useBlur({
  options,
  update,
});

const props = withDefaults(defineProps<MarkLineOption>(), {
  symbolKeepAspect: undefined,
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
function update(data: MarkLineComponentOption) {
  markCtx.updateMark("markLine", data);
}
</script>
<template>
  <slot></slot>
</template>

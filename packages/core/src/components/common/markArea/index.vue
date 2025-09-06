<script setup lang="tsx">
import { ref, watch } from "vue";
import { MarkAreaComponentOption, MarkAreaOption, TextType } from "./type";
import { isUndefined, omitBy } from "lodash";
import {
  useStyle,
  useMark,
  useText,
  useEmphasis,
  useBlur,
} from "../../../hooks/index";

defineOptions({
  name: "MarkArea",
  inheritAttrs: false,
});

let options = ref<MarkAreaComponentOption>({});

const markCtx = useMark();

useStyle({
  options,
  update,
});

useText<MarkAreaComponentOption, TextType>({
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

const props = withDefaults(defineProps<MarkAreaOption>(), {
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
function update(data: MarkAreaComponentOption) {
  markCtx.updateMark("markArea", data);
}
</script>
<template>
  <slot></slot>
</template>

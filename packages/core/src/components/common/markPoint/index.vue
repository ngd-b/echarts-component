<script setup lang="tsx">
import { ref, watch } from "vue";
import { MarkPointComponentOption, MarkPointOption, TextType } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useStyle, useMark, useText } from "../../../hooks/index";

defineOptions({
  name: "MarkPoint",
  inheritAttrs: false,
});

let options = ref<MarkPointComponentOption>({});

const markCtx = useMark();

useStyle({
  options,
  update,
});

useText<MarkPointComponentOption, TextType>({
  options: options,
  update,
});

const props = withDefaults(defineProps<MarkPointOption>(), {
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
function update(data: MarkPointComponentOption) {
  markCtx.updateMark("markPoint", data);
}
</script>
<template>
  <slot></slot>
</template>

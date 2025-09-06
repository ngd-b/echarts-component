<script setup lang="tsx">
import { ref, watch } from "vue";
import { isUndefined, omitBy } from "lodash";
import { SelectComponentOption, SelectOption } from "./type";
import { useSelect, useText, useStyle } from "../../../hooks/index";

defineOptions({
  name: "Emphasis",
  inheritAttrs: false,
});

let options = ref<SelectComponentOption>({});

const props = withDefaults(defineProps<SelectOption>(), {
  disabled: undefined,
});

const selectCtx = useSelect();

/**
 * 文本
 */
useText({
  options,
  update,
});

/**
 * 样式
 */
useStyle({
  options,
  update,
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
function update(data: SelectComponentOption) {
  selectCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

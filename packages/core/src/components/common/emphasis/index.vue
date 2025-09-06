<script setup lang="tsx">
import { ref, watch } from "vue";
import { isUndefined, omitBy } from "lodash";
import { EmphasisOption, EmphasisComponentOption } from "./type";
import { useEmphasis, useText, useStyle } from "../../../hooks/index";

defineOptions({
  name: "Emphasis",
  inheritAttrs: false,
});

let options = ref<EmphasisComponentOption>({});

const props = withDefaults(defineProps<EmphasisOption>(), {
  disabled: undefined,
  scale: undefined,
});

const emphasisCtx = useEmphasis();

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
function update(data: EmphasisComponentOption) {
  emphasisCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

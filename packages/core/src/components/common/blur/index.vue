<script setup lang="tsx">
import { ref, watch } from "vue";
import { isUndefined, omitBy } from "lodash";
import { BlurComponentOption, BlurOption } from "./type";
import { useBlur, useText, useStyle } from "../../../hooks/index";

defineOptions({
  name: "Blur",
  inheritAttrs: false,
});

let options = ref<BlurComponentOption>({});

const props = withDefaults(defineProps<BlurOption>(), {});

const blurCtx = useBlur();

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
function update(data: BlurComponentOption) {
  blurCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, watch } from "vue";
import { RippleEffectComponentOption, RippleEffectOption } from "./type";
import { isUndefined, omitBy } from "lodash";
import { useStyle, useSeriesOption } from "../../../../hooks/index";

defineOptions({
  name: "RippleEffect",
  inheritAttrs: false,
});

let options = ref<RippleEffectComponentOption>({});

const seriesOption = useSeriesOption();

useStyle({
  options,
  update,
});

const props = withDefaults(defineProps<RippleEffectOption>(), {});

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
function update(data: RippleEffectComponentOption) {
  seriesOption.update("rippleEffect", data);
}
</script>
<template>
  <slot></slot>
</template>

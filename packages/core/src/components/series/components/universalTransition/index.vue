<script setup lang="tsx">
import { ref, watch } from "vue";
import {
  UniversalTransitionComponentOption,
  UniversalTransitionOption,
} from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useStyle, useSeriesOption } from "@/hooks/index";

defineOptions({
  name: "UniversalTransition",
  inheritAttrs: false,
});

let options = ref<UniversalTransitionComponentOption>({});

const seriesOption = useSeriesOption();

useStyle({
  options,
  update,
});

const props = withDefaults(defineProps<UniversalTransitionOption>(), {
  enabled: undefined,
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
function update(data: UniversalTransitionComponentOption) {
  seriesOption.update("universalTransition", data);
}
</script>
<template>
  <slot></slot>
</template>

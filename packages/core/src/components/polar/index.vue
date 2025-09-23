<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useTooltip } from "../../hooks/index";
import { omitBy, isUndefined } from "lodash-es";
import type { PolarComponentOption, PolarOption } from "./type";

// 组件唯一id
let id = useId();

const options = ref<PolarComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

useTooltip({
  options,
  update,
});

defineOptions({
  name: "Polar",
});

const props = withDefaults(defineProps<PolarOption>(), {});

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
function update(data: PolarComponentOption) {
  vueEcharts.update("polar", data);
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useAxis } from "../../hooks/index";
import type { ParallelOption, ParallelComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<ParallelComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 配置坐标系样式
useAxis<ParallelComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "parallel",
});

const props = withDefaults(defineProps<ParallelOption>(), {});

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
function update(data: ParallelComponentOption) {
  vueEcharts.update("parallel", data);
}
</script>
<template>
  <slot></slot>
</template>

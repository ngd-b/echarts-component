<script setup lang="tsx">
import { computed, ref, useId, watch } from "vue";
import { useVueEcharts, useParallel } from "../../hooks/index";
import type {
  ParallelOption,
  ParallelComponentOption,
  ParallelAxisComponentOption,
} from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<ParallelComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();
/**
 * 平行坐标系
 */
useParallel({
  options,
  update,
});

defineOptions({
  name: "ParallelAxis",
});

const props = withDefaults(defineProps<ParallelOption>(), {});

const propsWithoutData = computed(() => {
  const { data, ...rest } = props;

  return rest;
});
watch(
  () => propsWithoutData,
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

watch(
  () => props.data,
  () => {
    vueEcharts.update("parallelAxis", props.data || []);
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

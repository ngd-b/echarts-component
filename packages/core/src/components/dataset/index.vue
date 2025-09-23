<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useTransform } from "@/hooks/index";
import type { DatasetOption, DatasetComponentOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<DatasetComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

useTransform({
  options,
  update,
});

defineOptions({
  name: "Dataset",
});

const props = withDefaults(defineProps<DatasetOption>(), {
  sourceHeader: undefined,
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
function update(data: DatasetComponentOption) {
  vueEcharts.update("dataset", data);
}
</script>
<template>
  <slot></slot>
</template>

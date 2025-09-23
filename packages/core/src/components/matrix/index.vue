<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import {
  useVueEcharts,
  useStyle,
  useTooltip,
  useMatrix,
} from "../../hooks/index";
import type { MatrixComponentOption, MatrixOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<MatrixComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

useMatrix({
  options,
  update,
});

useStyle({
  options,
  update,
});

useTooltip({
  options: options,
  update,
});

defineOptions({
  name: "Matrix",
});

const props = withDefaults(defineProps<MatrixOption>(), {});

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
function update(data: MatrixComponentOption) {
  vueEcharts.update("matrix", data);
}
</script>
<template>
  <slot></slot>
</template>

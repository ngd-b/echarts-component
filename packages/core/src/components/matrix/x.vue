<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText, useStyle, useMatrix } from "@/hooks/index";
import type {
  MatrixDimensionComponentOption,
  MatrixDimensionOption,
} from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<MatrixDimensionComponentOption>({});

const matrixCtx = useMatrix();

useStyle({
  options,
  update,
});

useText({
  options,
  update,
});

defineOptions({
  name: "X",
});

const props = withDefaults(defineProps<MatrixDimensionOption>(), {
  show: undefined,
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
function update(data: MatrixDimensionComponentOption) {
  matrixCtx.update("x", data);
}
</script>
<template>
  <slot></slot>
</template>

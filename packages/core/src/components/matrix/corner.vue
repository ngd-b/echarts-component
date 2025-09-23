<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText, useStyle, useMatrix } from "../../hooks/index";
import type { MatrixCornerComponentOption, MatrixCornerOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

const options = ref<MatrixCornerComponentOption>({});

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
  name: "Corner",
});

const props = withDefaults(defineProps<MatrixCornerOption>(), {
  silent: undefined,
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
function update(data: MatrixCornerComponentOption) {
  matrixCtx.update("corner", data);
}
</script>
<template>
  <slot></slot>
</template>

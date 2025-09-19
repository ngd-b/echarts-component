<script setup lang="tsx">
import { ref, watch } from "vue";
import { useText, useStyle, useMatrix } from "../../hooks/index";
import type { MatrixBodyComponentOption, MatrixBodyOption } from "./type";
import { omitBy, isUndefined } from "lodash";

const options = ref<MatrixBodyComponentOption>({});

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
  name: "Body",
});

const props = withDefaults(defineProps<MatrixBodyOption>(), {
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
function update(data: MatrixBodyComponentOption) {
  matrixCtx.update("body", data);
}
</script>
<template>
  <slot></slot>
</template>

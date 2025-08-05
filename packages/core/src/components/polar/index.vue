<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useAxis } from "../../hooks/index";
import { omitBy, isUndefined } from "lodash";
import type { Polar, PolarOption } from "./type";
import { DefaultPolar } from "./type";

// 组件唯一id
let id = useId();

const options = ref<PolarOption>({
  id,
  ...DefaultPolar,
});
const vueEcharts = useVueEcharts();

// 配置坐标系样式
useAxis<PolarOption>({
  options: options,
  update,
});

defineOptions({
  name: "PolarAxis",
});

const props = withDefaults(defineProps<Polar>(), {});

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
function update(data: PolarOption) {
  vueEcharts.update("polar", data);
}
</script>
<template>
  <slot></slot>
</template>

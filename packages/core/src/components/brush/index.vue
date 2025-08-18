<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useAxis } from "../../hooks/index";
import type { Brush, BrushOption } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<BrushOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 配置坐标系样式
useAxis<BrushOption>({
  options: options,
  update,
});

defineOptions({
  name: "Brush",
});

const props = withDefaults(defineProps<Brush>(), {
  transformable: true,
  removeOnClick: true,
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
function update(data: BrushOption) {
  vueEcharts.update("brush", data);
}
</script>
<template>
  <slot></slot>
</template>

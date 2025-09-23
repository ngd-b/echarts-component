<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useStyle } from "@/hooks/index";
import type { ThumbnailComponentOption, ThumbnailOption } from "./type";
import { omitBy, isUndefined } from "lodash-es";

// 组件唯一id
let id = useId();

const options = ref<ThumbnailComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

useStyle({
  options,
  update,
});

defineOptions({
  name: "Thumbnail",
});

const props = withDefaults(defineProps<ThumbnailOption>(), {
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
function update(data: ThumbnailComponentOption) {
  vueEcharts.update("thumbnail", data);
}
</script>
<template>
  <slot></slot>
</template>

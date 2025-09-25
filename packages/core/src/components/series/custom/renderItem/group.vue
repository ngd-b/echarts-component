<script setup lang="tsx">
import type { CustomGroupComponentOption, CustomGroupOption } from "../type";
import {} from "@/hooks/index";
import { isUndefined, omitBy } from "lodash-es";
import { shallowRef, useId, watch } from "vue";

// 组件唯一id
let id = useId();

const options = shallowRef<CustomGroupComponentOption>({
  type: "group",
  id: id,
  children: [],
});

defineOptions({
  name: "RenderGroup",
});

const props = withDefaults(defineProps<CustomGroupOption>(), {
  silent: undefined,
  tooltipDisabled: undefined,
  diffChildrenByName: undefined,
  ignore: undefined,
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
function update(data: CustomGroupComponentOption) {
  // vueEcharts.resize();
}
</script>
<template>
  <slot></slot>
</template>

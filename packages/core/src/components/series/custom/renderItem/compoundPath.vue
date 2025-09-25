<script setup lang="tsx">
import type {
  CustomCompoundPathComponentOption,
  CustomCompoundPathOption,
} from "../type";
import { useVueEcharts } from "@/hooks/index";
import { isUndefined, omitBy } from "lodash-es";
import { shallowRef, useId, watch } from "vue";

// 组件唯一id
let id = useId();

const options = shallowRef<CustomCompoundPathComponentOption>({
  type: "compoundPath",
  id: id,
});

defineOptions({
  name: "RenderCompoundPath",
});

const props = withDefaults(defineProps<CustomCompoundPathOption>(), {
  silent: undefined,
  tooltipDisabled: undefined,
  invisible: undefined,
  ignore: undefined,
  emphasisDisabled: undefined,
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
function update(data: CustomCompoundPathComponentOption) {
  // vueEcharts.resize();
}
</script>
<template>
  <slot></slot>
</template>

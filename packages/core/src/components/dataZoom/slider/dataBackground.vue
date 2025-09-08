<script setup lang="tsx">
import { ref, watch } from "vue";
import { isUndefined, omitBy } from "lodash";
import { DataBackgroundComponentOption, DataBackgroundOption } from "./type";
import { useStyle, useSlider } from "../../../hooks/index";

defineOptions({
  name: "DataBackground",
  inheritAttrs: false,
});

let options = ref<DataBackgroundComponentOption>({});

const props = withDefaults(
  defineProps<DataBackgroundOption & { selected?: boolean }>(),
  {
    selected: undefined,
  }
);

const sliderCtx = useSlider();
/**
 * 样式
 */
useStyle({
  options,
  update,
});

watch(
  () => props,
  () => {
    let { _selected, ...rest } = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...rest,
    };
    update(options.value);
  },
  { immediate: true, deep: true }
);

/**
 * 更新配置
 * @param data
 */
function update(data: DataBackgroundComponentOption) {
  sliderCtx.update(
    props.selected ? "selectedDataBackground" : "dataBackground",
    data
  );
}
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import { ref, useId, watch } from "vue";
import { useVueEcharts, useText, useAxis } from "../../hooks/index";
import type { TextType, CalendarComponentOption, CalendarOption } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

// 组件唯一id
let id = useId();

const options = ref<CalendarComponentOption>({
  id,
});
const vueEcharts = useVueEcharts();

// 增加文本样式
useText<CalendarComponentOption, TextType>({
  options: options,
  update,
  defaultTextOptions: (name) => {
    if (!name) {
      return {
        show: true,
      };
    }
    return TextMapDefault[name];
  },
});
// 配置坐标系样式
useAxis<CalendarComponentOption>({
  options: options,
  update,
});

defineOptions({
  name: "Calendar",
});

const props = withDefaults(defineProps<CalendarOption>(), {});

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
function update(data: CalendarComponentOption) {
  vueEcharts.update("calendar", data);
}
</script>
<template>
  <slot></slot>
</template>

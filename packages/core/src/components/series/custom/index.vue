<script setup lang="tsx">
import type { CustomOption, CustomSeriesOption } from "./type";
import { useSeries } from "@/hooks/index";
import { ref, useId } from "vue";

// 组件唯一id
let id = useId();

const options = ref<CustomSeriesOption>({
  type: "custom",
  id: id,
});

defineOptions({
  name: "Custom",
});

const props = withDefaults(defineProps<CustomOption>(), {
  legendHoverLink: undefined,
  selectedMode: undefined,
  silent: undefined,
  animation: undefined,
  universalTransition: undefined,
  sourceHeader: undefined,
});

useSeries<CustomSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

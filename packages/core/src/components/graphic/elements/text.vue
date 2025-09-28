<script setup lang="tsx">
import { useElement } from "@/hooks/index";
import { shallowRef, useId } from "vue";
import type {
  GraphicComponentTextOption,
  GraphicElementEventType,
  GraphicTextOption,
} from "../type";

// 组件唯一id
let id = useId();

const options = shallowRef<GraphicComponentTextOption>({
  type: "text",
  id: id,
});

defineOptions({
  name: "RenderText",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<GraphicTextOption>(), {
  draggable: undefined,
  silent: undefined,
  ignore: undefined,
  invisible: undefined,
  progressive: undefined,
});

defineEmits<{
  [K in GraphicElementEventType]: [...args: any[]];
}>();

useElement(props, options);
</script>
<template>
  <slot></slot>
</template>

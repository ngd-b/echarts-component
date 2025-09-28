<script setup lang="tsx">
import { useElement } from "@/hooks/index";
import { shallowRef, useId } from "vue";
import type {
  GraphicComponentZRPathOption,
  GraphicElementEventType,
  GraphicZRPathOption,
} from "../type";

// 组件唯一id
let id = useId();

const options = shallowRef<GraphicComponentZRPathOption>({
  type: "polyline",
  id: id,
});

defineOptions({
  name: "RenderPolyline",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<GraphicZRPathOption>(), {
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

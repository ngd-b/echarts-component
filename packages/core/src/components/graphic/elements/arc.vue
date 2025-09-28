<script setup lang="tsx">
import { useElement } from "@/hooks/index";
import { shallowRef, useId } from "vue";
import type {
  GraphicComponentZRPathOption,
  GraphicZRPathOption,
} from "../type";

// 组件唯一id
let id = useId();

defineOptions({
  name: "RenderArc",
  inheritAttrs: false,
});

const options = shallowRef<GraphicComponentZRPathOption>({
  type: "arc",
  id: id,
});

const props = withDefaults(defineProps<GraphicZRPathOption>(), {
  draggable: undefined,
  diffChildrenByName: undefined,
});

useElement(props, options);
</script>
<template>
  <slot></slot>
</template>

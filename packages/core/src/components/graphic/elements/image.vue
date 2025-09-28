<script setup lang="tsx">
import { useElement } from "@/hooks/index";
import { shallowRef, useId } from "vue";
import type { GraphicComponentImageOption, GraphicImageOption } from "../type";

// 组件唯一id
let id = useId();

const options = shallowRef<GraphicComponentImageOption>({
  type: "image",
  id: id,
});

defineOptions({
  name: "RenderImage",
});

const props = withDefaults(defineProps<GraphicImageOption>(), {
  draggable: undefined,
  diffChildrenByName: undefined,
});

useElement(props, options);
</script>
<template>
  <slot></slot>
</template>

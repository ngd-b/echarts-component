<script setup lang="tsx">
import { useElement, useGraphic } from "@/hooks/index";
import { shallowRef, useId } from "vue";
import type {
  GraphicComponentGroupOption,
  GraphicComponentOption,
  GraphicElementEventType,
  GraphicGroupOption,
} from "../type";

// 组件唯一id
let id = useId();

const options = shallowRef<GraphicComponentGroupOption>({
  type: "group",
  id: id,
  children: [],
});

defineOptions({
  name: "RenderGroup",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<GraphicGroupOption>(), {
  silent: undefined,
  ignore: undefined,
  draggable: undefined,
  diffChildrenByName: undefined,
});

defineEmits<{
  [K in GraphicElementEventType]: [...args: any[]];
}>();

const { update } = useElement(props, options);

useGraphic({
  options: shallowRef(options.value.children),
  update: updateChildren,
});

/**
 * 更新配置
 * @param data
 */
function updateChildren(data: GraphicComponentOption) {
  options.value.children = data;
  update(options.value);
}
</script>
<template>
  <slot></slot>
</template>

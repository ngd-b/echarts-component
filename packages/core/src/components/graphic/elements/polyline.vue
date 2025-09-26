<script setup lang="tsx">
import { useGraphic } from "@/hooks/index";
import { isUndefined, omitBy } from "lodash-es";
import { shallowRef, useId, watch } from "vue";
import type {
  GraphicComponentZRPathOption,
  GraphicZRPathOption,
} from "../type";

// 组件唯一id
let id = useId();

const graphicCtx = useGraphic();

const options = shallowRef<GraphicComponentZRPathOption>({
  type: "polyline",
  id: id,
});

defineOptions({
  name: "RenderPolyline",
});

const props = withDefaults(defineProps<GraphicZRPathOption>(), {
  draggable: undefined,
  diffChildrenByName: undefined,
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
function update(data: GraphicComponentZRPathOption) {
  graphicCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

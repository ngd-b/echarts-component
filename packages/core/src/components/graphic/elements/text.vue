<script setup lang="tsx">
import { useGraphic } from "@/hooks/index";
import { isUndefined, omitBy } from "lodash-es";
import { shallowRef, useId, watch } from "vue";
import type { GraphicComponentTextOption, GraphicTextOption } from "../type";

// 组件唯一id
let id = useId();

const graphicCtx = useGraphic();

const options = shallowRef<GraphicComponentTextOption>({
  type: "text",
  id: id,
});

defineOptions({
  name: "RenderSector",
});

const props = withDefaults(defineProps<GraphicTextOption>(), {
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
function update(data: GraphicComponentTextOption) {
  graphicCtx.update(data);
}
</script>
<template>
  <slot></slot>
</template>

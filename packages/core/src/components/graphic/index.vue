<script setup lang="tsx">
import { shallowRef } from "vue";
import { useVueEcharts, useGraphic } from "@/hooks/index";
import type { GraphicComponentOption } from "./type";

const options = shallowRef<GraphicComponentOption>([]);
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Graphic",
});

useGraphic({
  options,
  update,
});

/**
 * 更新配置
 * @param data
 */
function update(data: GraphicComponentOption) {
  vueEcharts.update("graphic", data);
}
</script>
<template>
  <slot></slot>
</template>

<template>
  <Inside v-if="type === 'inside'" v-bind="omitProps">
    <slot></slot>
  </Inside>
  <Slider v-else-if="type === 'slider'" v-bind="omitProps">
    <slot></slot>
  </Slider>
</template>
<script setup lang="tsx">
import { computed } from "vue";
import Inside from "./inside/index.vue";
import Slider from "./slider/index.vue";
import type { DataZoomOption } from "./type";

defineOptions({
  inheritAttrs: false,
  name: "DataZoom",
});

const props = withDefaults(defineProps<DataZoomOption>(), {
  type: "inside",
  show: undefined,
  disabled: undefined,
  zoomLock: undefined,
  zoomOnMouseWheel: undefined,
  moveOnMouseMove: undefined,
  moveOnMouseWheel: undefined,
  preventDefaultMouseMove: undefined,
  showDetail: undefined,
  brushSelect: undefined,
});

const omitProps = computed(() => {
  if (props.type === "inside") {
    const { type, ...rest } = props;
    return rest;
  }
  if (props.type === "slider") {
    const { type, ...rest } = props;
    return rest;
  }
  return {};
});
</script>

<template>
  <Inside v-if="type === 'inside'" v-bind="omitProps" />
  <Slider v-else-if="type === 'slider'" v-bind="omitProps" />
</template>
<script setup lang="tsx">
import { computed } from "vue";
import Inside from "./inside/index.vue";
import Slider from "./slider/index.vue";
import type { DataZoomOption } from "./type";

defineOptions({
  name: "DataZoom",
});

const props = defineProps<DataZoomOption>();

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

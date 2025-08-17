<template>
  <Inside v-if="type === 'inside'" v-bind="props" />
  <Slider v-else-if="type === 'slider'" v-bind="props" />
</template>
<script setup lang="tsx">
import Inside from "./inside/index.vue";
import Slider from "./slider/index.vue";
import type { DataZoomOption } from "./type";

defineOptions({
  name: "DataZoom",
});

const props = defineProps<DataZoomOption>();
</script>

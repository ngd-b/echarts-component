<template>
  <Continuous v-if="type === 'continuous'" v-bind="omitProps" />
  <Piecewise v-else-if="type === 'piecewise'" v-bind="omitProps" />
</template>
<script setup lang="tsx">
import { computed } from "vue";
import Continuous from "./continuous/index.vue";
import Piecewise from "./piecewise/index.vue";
import type { VisualMapOption } from "./type";

defineOptions({
  name: "VisualMap",
});

const props = defineProps<VisualMapOption>();

const omitProps = computed(() => {
  if (props.type === "continuous") {
    const { type, ...rest } = props;
    return rest;
  }
  if (props.type === "piecewise") {
    const { type, ...rest } = props;
    return rest;
  }
  return {};
});
</script>

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { MapSeries, MapSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultMapSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([MapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<MapSeriesOption>({
  type: "map",
  id: id,
  map: "",
  ...DefaultMapSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "Heatmap",
});

const props = withDefaults(defineProps<MapSeries>(), {});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);
    vueEcharts.updateSeries({ ...options.value, ...propsData });
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <slot></slot>
</template>

<script setup lang="tsx">
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { MapSeries, MapSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultMapSeries } from "./type";

echarts.use([MapChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<MapSeriesOption>({
  type: "map",
  id: id,
  map: "",
  ...DefaultMapSeries,
});

defineOptions({
  name: "Map",
});

const props = withDefaults(defineProps<MapSeries>(), {});
useSeries<MapSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

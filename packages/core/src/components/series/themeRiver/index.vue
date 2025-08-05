<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ThemeRiverChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ThemeRiverSeries, ThemeRiverSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

import { DefaultThemeRiverSeries } from "./type";

echarts.use([ThemeRiverChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ThemeRiverSeriesOption>({
  type: "themeRiver",
  id: id,
  ...DefaultThemeRiverSeries,
});

defineOptions({
  name: "ThemeRiver",
});

const props = withDefaults(defineProps<ThemeRiverSeries>(), {});
useSeries<ThemeRiverSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

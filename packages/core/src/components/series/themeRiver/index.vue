<script setup lang="tsx">
import * as echarts from "echarts/core";
import { ThemeRiverChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ThemeRiverSeries, ThemeRiverSeriesOption } from "./type";
import { useVueEcharts } from "../../../hooks/index";
import { ref, useId, watch } from "vue";

import { DefaultThemeRiverSeries } from "./type";
import { omitBy, isUndefined } from "lodash";

echarts.use([ThemeRiverChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<ThemeRiverSeriesOption>({
  type: "themeRiver",
  id: id,
  ...DefaultThemeRiverSeries,
});
const vueEcharts = useVueEcharts();

defineOptions({
  name: "ThemeRiver",
});

const props = withDefaults(defineProps<ThemeRiverSeries>(), {});

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

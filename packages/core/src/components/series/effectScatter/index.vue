<script setup lang="tsx">
import * as echarts from "echarts/core";
import { EffectScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { EffectScatterSeries, EffectScatterSeriesOption } from "./type";
import { useSeries } from "../../../hooks/index";
import { ref, useId } from "vue";

echarts.use([EffectScatterChart, CanvasRenderer]);
// 组件唯一id
let id = useId();

const options = ref<EffectScatterSeriesOption>({
  type: "effectScatter",
  id: id,
});
defineOptions({
  name: "EffectScatter",
});

const props = withDefaults(defineProps<EffectScatterSeries>(), {
  legendHoverLink: true,
  animation: true,
});

useSeries<EffectScatterSeriesOption>(props, options);
</script>
<template>
  <slot></slot>
</template>

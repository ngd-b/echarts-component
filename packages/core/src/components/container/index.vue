<template>
  <div ref="root" v-bind="attrs"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onMounted, ref, useAttrs, watch } from "vue";
import { useText, useVueEcharts } from "../../hooks/index";
import type { EchartsOptions } from "../../types/index";
import type { ChartOptions, SeriesConfig, TextType } from "./type";
import { DefaultSeriesConfig, TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";

defineOptions({
  name: "VueEcharts",
  inheritAttrs: false, // 继承属性
});

const attrs = useAttrs();
let chart: echarts.ECharts | null = null;

const root = ref(null);
const options = ref<EchartsOptions>({
  ...DefaultSeriesConfig,
});
const props = withDefaults(defineProps<SeriesConfig>(), {
  animation: true,
});

useVueEcharts({
  options: options,
});
// 增加文本样式
useText<ChartOptions, TextType>({
  options: options,
  update: updateChart,
  defaultTextOptions: (name) => {
    if (!name) {
      return {};
    }
    return TextMapDefault[name];
  },
});

onMounted(() => {
  initChart();
});

watch(
  () => props,
  () => {
    let propsData = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...propsData,
    };
  },
  { immediate: true, deep: true }
);

watch(
  options,
  () => {
    updateChart();
  },
  { immediate: true, deep: true }
);
function initChart() {
  chart = echarts.init(root.value);

  chart.setOption(options.value);
}

function updateChart() {
  console.log(
    "====================updateChart======================",
    options.value
  );
  chart?.setOption(options.value);
}
</script>

<template>
  <div ref="root" v-bind="attrs"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onBeforeMount, onMounted, ref, useAttrs, watch } from "vue";
import { useText, useVueEcharts } from "../../hooks/index";
import type { EChartsOption, TextType } from "./type";
import { omitBy, isUndefined } from "lodash-es";
import { ChartOptions } from "../../types";

defineOptions({
  name: "VueEcharts",
  inheritAttrs: false, // 继承属性
});

const attrs = useAttrs();

const root = ref(null);

const props = withDefaults(defineProps<EChartsOption>(), {
  animation: undefined,
  useUTC: undefined,
  richInheritPlainLabel: undefined,
});

const vueEcharts = useVueEcharts();

// 增加文本样式
useText<ChartOptions, TextType>({
  options: vueEcharts.options,
  update,
});

onMounted(() => {
  initChart();
});
onBeforeMount(() => {
  if (vueEcharts.vueEchartsRef.value) {
    vueEcharts.vueEchartsRef.value.dispose();
  }
});
watch(
  () => props,
  () => {
    update();
  },
  { deep: true }
);

watch(
  () => vueEcharts.options,
  () => {
    update();
  },
  { deep: true }
);

function initChart() {
  const { theme, config } = props;
  vueEcharts.vueEchartsRef.value = echarts.init(root.value, theme, config);

  update();
}

function update() {
  let propsData = omitBy(props, (value, key) => {
    return isUndefined(value) || ["theme", "config"].includes(key);
  });

  vueEcharts.vueEchartsRef.value?.setOption({
    ...vueEcharts.options.value,
    ...propsData,
  });
}
</script>

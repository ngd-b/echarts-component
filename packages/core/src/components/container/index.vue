<template>
  <div ref="root" v-bind="attrs"></div>
  <slot></slot>
</template>
<script setup lang="tsx">
import * as echarts from "echarts";
import { onBeforeMount, onMounted, ref, useAttrs, watch } from "vue";
import { useText, useVueEcharts } from "../../hooks/index";
import type { EChartsOption, TextType } from "./type";
import { TextMapDefault } from "./type";
import { omitBy, isUndefined } from "lodash";
import { ChartOptions } from "../../types";

defineOptions({
  name: "VueEcharts",
  inheritAttrs: false, // 继承属性
});

const attrs = useAttrs();

const root = ref(null);

const props = withDefaults(defineProps<EChartsOption>(), {
  animation: undefined,
  richInheritPlainLabel: undefined,
});

const vueEcharts = useVueEcharts();

// 增加文本样式
useText<ChartOptions, TextType>({
  options: vueEcharts.options,
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
onBeforeMount(() => {
  if (vueEcharts.vueEchartsRef.value) {
    vueEcharts.vueEchartsRef.value.dispose();
  }
});
watch(
  () => props,
  () => {
    updateChart();
  },
  { immediate: true, deep: true }
);

watch(
  vueEcharts.options,
  () => {
    updateChart();
  },
  { immediate: true, deep: true }
);
function initChart() {
  const { theme, config } = props;
  vueEcharts.vueEchartsRef.value = echarts.init(root.value, theme, config);
  // vueEcharts.vueEchartsRef.value.setOption(options.value);
  updateChart();
}

function updateChart() {
  let updateProps = omitBy(
    {
      ...props,
    },
    isUndefined
  );
  //
  ["theme", "config"].forEach((key) =>
    Reflect.deleteProperty(updateProps, key)
  );

  vueEcharts.vueEchartsRef.value?.setOption({
    ...updateProps,
    ...vueEcharts.options.value,
  });
}
</script>

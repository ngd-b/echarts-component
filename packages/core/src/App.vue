<template>
  <h2>vue-echarts</h2>

  <div class="flex flex-wrap gap-20px">
    <VueEcharts style="width: 100%; height: 300px" :animation="false">
    </VueEcharts>
  </div>
</template>
<script setup lang="tsx">
import { onMounted, ref } from "vue";
import {
  VueEcharts,
  Line,
  XAxis,
  YAxis,
  Grid,
  Title,
  Bar,
  Pie,
  Legend,
  Tooltip,
  Text,
  AxisLine,
  LineStyle,
  AxisTick,
  MinorTick,
  SplitLine,
  SplitArea,
  AreaStyle,
  MinorSplitLine,
  VisualMap,
  Dataset,
  DataZoom,
} from "./components";
import { useVueEcharts } from "./hooks";

let data = ref([]);
const {
  setOption,
  actions,
  vueEchartsRef,
  getWidth,
  getOption,
  clear,
  onClick,
  onFinished,
} = useVueEcharts()!;
onMounted(() => {
  setTimeout(() => {
    // data.value = [100, 539, 118, 267, 126, 335, 444, 563, 1282, 22];

    // console.log(vueEchartsRef);
    actions.highlight({ dataIndex: 0 });
    actions.select({ seriesIndex: 0 });

    console.log(getWidth(), getOption());
  }, 3 * 1000);

  onClick((event) => {
    console.log("点击了", event);
  });
  onFinished(() => {
    console.log("绘制完成");
  });
});
</script>

<template>
  <h2>vue-echarts</h2>

  <div class="flex flex-wrap gap-20px">
    <VueEcharts class="w-500px h-400px" theme="dark">
      <Line :data="data" selected-mode />
      <Line :data="data.map((val) => val * 2)" selected-mode />
      <XAxis name="XAxis">
        <Text prop="nameTextStyle" color="red" font-size="24" />
        <Text prop="axisLabel" color="green" font-size="18" />
        <AxisLine>
          <line-style color="red" />
        </AxisLine>
        <AxisTick>
          <line-style :width="5" />
        </AxisTick>
        <SplitLine>
          <line-style color="red" />
        </SplitLine>
        <SplitArea show></SplitArea>
      </XAxis>
      <YAxis name="YAxis">
        <Text prop="nameTextStyle" color="yellow" />

        <MinorTick show :split-number="10">
          <line-style color="red" :width="2" />
        </MinorTick>
        <MinorSplitLine>
          <line-style color="red" />
        </MinorSplitLine>
      </YAxis>
      <Tooltip trigger="axis">
        <Text prop="textStyle" color="#fff" />
      </Tooltip>
    </VueEcharts>
    <!-- <VueEcharts class="w-500px h-400px">
      <Bar :data="data" />
      <XAxis :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
      <YAxis />
      <Title text="Hello World" subtext="hboot" left="center">
        <Text prop="textStyle" color="red" font-size="32" />
        <Text prop="subtextStyle" color="blue" font-size="16" />
      </Title>
      <Tooltip />
      <Text prop="textStyle" color="#4455da" />
    </VueEcharts>
    <VueEcharts class="w-500px h-400px">
      <Pie
        :data="[
          { name: 'A', value: 200 },
          { name: 'B', value: 300 },
          { name: 'C', value: 400 },
        ]"
      />
      <Title text="Hello World" left="center" />
      <Legend top="center" :right="0" orient="vertical" />
      <Legend left="center" :bottom="0">
        <Text prop="textStyle" font-size="14" color="#ffaabb" />
      </Legend>
      <Tooltip />
    </VueEcharts> -->
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
} from "./components";
import { useVueEcharts } from "./hooks";

let data = ref([1, 12, 3, 24, 5, 36, 7, 48, 9, 10]);
const {
  setOption,
  actions,
  vueEchartsRef,
  getWidth,
  getOption,
  clear,
  onClick,
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
  setOption({
    series: [
      {
        data: [10, 59, 8, 67, 26, 35, 44, 3, 82, 1],
      },
    ],
  });
});
</script>

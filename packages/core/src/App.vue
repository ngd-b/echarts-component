<template>
  <h2>vue-echarts</h2>

  <div class="flex flex-wrap gap-20px">
    <VueEcharts class="w-500px h-400px">
      <Line :data="data" />
      <XAxis />
      <YAxis />
      <Tooltip trigger="axis" />
    </VueEcharts>
    <VueEcharts class="w-500px h-400px">
      <Bar :data="data" />
      <XAxis :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
      <YAxis />
      <Title text="Hello World" left="center">
        <TextStyle color="red" font-size="32" />
      </Title>
      <Tooltip />
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
      <Legend left="center" :bottom="0" />
      <Tooltip />
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
  TextStyle,
} from "./components";

let data = ref([1, 12, 3, 24, 5, 36, 7, 48, 9, 10]);
onMounted(() => {
  setTimeout(() => {
    data.value = [10, 59, 8, 67, 26, 35, 44, 3, 82, 1];
  }, 3 * 1000);
});
</script>

<template>
  <h2>vue-echarts</h2>
  <div class="w-500px h-400px">
    <VueEcharts>
      <Line :data="data" />
      <XAxis :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
      <YAxis />
      <Grid show />
      <Title text="Hello World" left="center" />
    </VueEcharts>
  </div>
</template>
<script setup lang="tsx">
import { onMounted, ref } from "vue";
import { VueEcharts, Line, XAxis, YAxis, Grid, Title } from "./components";

let data = ref([1, 12, 3, 24, 5, 36, 7, 48, 9, 10]);
onMounted(() => {
  setTimeout(() => {
    data.value = [10, 59, 8, 67, 26, 35, 44, 3, 82, 1];
  }, 3 * 1000);
});
</script>

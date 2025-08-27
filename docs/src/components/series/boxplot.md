# Boxplot 箱形图

<script setup>
  import { ref } from 'vue'

  const data = ref([
      [655, 850, 940, 980, 1070],
      [760, 800, 845, 885, 960],
      [780, 840, 855, 880, 940],
      [720, 767.5, 815, 865, 920],
      [740, 807.5, 810, 870, 950]
    ]);
</script>

## 基本用法

<VueEcharts style="width:100%;height:300px;">
  <Boxplot :data="data" name="boxplot" />
  <Title text="Michelson-Morley Experiment" left='center' />
  <YAxis name="km/s minus 299,000">
      <SplitArea show />
  </YAxis>
  <XAxis type='category' :data='["0", "1", "2", "3", "4"]' boundaryGap :nameGap="30" >
      <Text prop='axisLabel' formatter="expr {value}" />
      <SplitLine :show="false" />
      <SplitArea :show="false" />
  </XAxis>
</VueEcharts>

```vue
<script setup>
  import { ref } from 'vue'

  const data = ref([
      [655, 850, 940, 980, 1070],
      [760, 800, 845, 885, 960],
      [780, 840, 855, 880, 940],
      [720, 767.5, 815, 865, 920],
      [740, 807.5, 810, 870, 950]
    ]);
</script>
<template>
  <VueEcharts style="width:100%;height:300px;">
    <Boxplot :data="data" name="boxplot" />
    <Title text="Michelson-Morley Experiment" left='center' />
    <YAxis name="km/s minus 299,000">
        <SplitArea show />
    </YAxis>
    <XAxis type='category' :data='["0", "1", "2", "3", "4"]' boundaryGap :nameGap="30" >
        <Text prop='axisLabel' formatter="expr {value}" />
        <SplitLine :show="false" />
        <SplitArea :show="false" />
    </XAxis>
  </VueEcharts>
</template>

```

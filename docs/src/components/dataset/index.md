# Dataset 数据集组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const data = [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<VueEcharts style="width:100%;height:300px;position:relative;">
    <Legend />
    <Tooltip />
    <Dataset :source="data" />
    <XAxis type="category" :gridIndex="0" />
    <XAxis type="category" :gridIndex="1" />
    <YAxis :gridIndex="0" />
    <YAxis :gridIndex="1" />
    <Grid bottom='55%' />
    <Grid top="55%" />
    <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
    <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
    <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
    <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
    <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
    <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
    <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data = [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
        <Legend />
        <Tooltip />
        <Dataset :source="data" />
        <XAxis type="category" :gridIndex="0" />
        <XAxis type="category" :gridIndex="1" />
        <YAxis :gridIndex="0" />
        <YAxis :gridIndex="1" />
        <Grid bottom='55%' />
        <Grid top="55%" />
        <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
        <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
        <Bar :xAxisIndex="0" :yAxisIndex="0" seriesLayoutBy="row" />
        <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
        <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
        <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
        <Bar :xAxisIndex="1" :yAxisIndex="1" seriesLayoutBy="column" />
    </VueEcharts>
</template>
```

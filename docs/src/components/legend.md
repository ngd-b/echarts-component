# Legend 图例组件

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[
      ["type", "2012", "2013", "2014", "2015", "2016"],
      ["Forest", 320, 332, 301, 334, 390],
      ["Steppe", 220, 182, 191, 234, 290],
      ["Desert", 150, 232, 201, 154, 190],
      ["Wetland", 98, 77, 101, 99, 40]
    ]
</script>

<VueEcharts style="width:100%;height:300px;" :color='["#003366", "#006699", "#4cabce", "#e5323e"]'>
    <Legend />
    <Dataset :source="data" />
    <YAxis />
    <XAxis type="category">
        <AxisTick :show="false" />
    </XAxis>
    <Bar v-for="val in 4" :key="val" seriesLayoutBy='row' />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[
      ["type", "2012", "2013", "2014", "2015", "2016"],
      ["Forest", 320, 332, 301, 334, 390],
      ["Steppe", 220, 182, 191, 234, 290],
      ["Desert", 150, 232, 201, 154, 190],
      ["Wetland", 98, 77, 101, 99, 40]
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" :color='["#003366", "#006699", "#4cabce", "#e5323e"]'>
        <Legend />
        <Dataset :source="data" />
        <YAxis />
        <XAxis type="category">
            <AxisTick :show="false" />
        </XAxis>
        <Bar v-for="val in 4" :key="val" seriesLayoutBy='row' />
    </VueEcharts>
</template>
```

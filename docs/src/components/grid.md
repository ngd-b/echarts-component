# Grid 坐标系组件

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[]
</script>

<VueEcharts style="width:100%;height:300px;" :color=' ["#3398DB"]'>
    <Tooltip trigger="axis" :axisPointer="{ type: 'shadow' }" />
    <Grid />
    <XAxis type="category" :data='["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'>
        <AxisTick :alignWithLabel="true" />
    </XAxis>
    <YAxis type="value" />
    <Bar name="直接访问" barWidth="60%" :data='[10, 52, 200, 334, 390, 330, 220]' />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" :color=' ["#3398DB"]'>
        <Tooltip trigger="axis" :axisPointer="{ type: 'shadow' }" />
        <Grid />
        <XAxis type="category" :data='["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'>
            <AxisTick :alignWithLabel="true" />
        </XAxis>
        <YAxis type="value" />
        <Bar name="直接访问" barWidth="60%" :data='[10, 52, 200, 334, 390, 330, 220]' />
    </VueEcharts>
</template>
```

# YAxis y轴组件

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[]
</script>

<VueEcharts style="width:100%;height:300px;">
    <Legend left='left' :data='["2的指数", "3的指数"]' />
    <XAxis type='category' name='x' :data='["一", "二", "三", "四", "五", "六", "七", "八", "九"]'>
        <SplitLine :show='false' />
    </XAxis>
    <YAxis type='log' name='y'>
        <MinorTick show />
        <MinorSplitLine show />
    </YAxis>
   <Grid left='3%' right='4%' top='3%' containLabel />
   <Line name='2的指数' :data='[1, 2, 4, 8, 16, 32, 64, 128, 256]' />
   <Line name='3的指数' :data='[1, 3, 9, 27, 81, 247, 741, 2223, 6669]' />
   <Line name='1/2的指数' :data=' [0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125, 0.00390625, 0.001953125]' />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[    // ...
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;">
        <Legend left='left' :data='["2的指数", "3的指数"]' />
        <XAxis type='category' name='x' :data='["一", "二", "三", "四", "五", "六", "七", "八", "九"]'>
            <SplitLine :show='false' />
        </XAxis>
        <YAxis type='log' name='y'>
            <MinorTick show />
            <MinorSplitLine show />
        </YAxis>
        <Grid left='3%' right='4%' top='3%' containLabel />
        <Line name='2的指数' :data='[1, 2, 4, 8, 16, 32, 64, 128, 256]' />
        <Line name='3的指数' :data='[1, 3, 9, 27, 81, 247, 741, 2223, 6669]' />
        <Line name='1/2的指数' :data=' [0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125, 0.00390625, 0.001953125]' />
    </VueEcharts>
</template>
```

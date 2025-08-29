# AngleAxis 极坐标系的角度轴

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data = []
</script>

<VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
    <RadiusAxis type='category' :data='["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]' />
    <AngleAxis type='category' :boundaryGap='false' :data='["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]' />
    <Polar />
    <Legeng  left='right' :data='["Punch Card"]' />
    <Title text='Punch Card of Github' />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[
     
    ]
</script>
<template>
   <VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
        <RadiusAxis type='category' :data='["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]' />
        <AngleAxis type='category' :boundaryGap='false' :data='["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]' />
        <Polar />
        <Legeng  left='right' :data='["Punch Card"]' />
        <Title text='Punch Card of Github' />
    </VueEcharts>
</template>
```

# Gauge 仪表盘

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[{
      value: 50,
      name: "Percent"
    }]
</script>

<VueEcharts style="width:100%;height:300px;" >
    <Gauge name='Indicator'  :data="data" />
    <Tooltip />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[{
      value: 50,
      name: "Percent"
    }]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" >
        <Gauge name='Indicator'  :data="data" />
        <Tooltip />
    </VueEcharts>
</template>
```

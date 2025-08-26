# Funnel 漏斗图

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[{
      value: 60,
      name: "Visit"
    }, {
      value: 40,
      name: "Consulting"
    }, {
      value: 20,
      name: "Order"
    }, {
      value: 80,
      name: "Click"
    }, {
      value: 100,
      name: "Display"
    }]
</script>

<VueEcharts style="width:100%;height:300px;" >
    <Funnel name='漏斗图'  :data="data" />
    <Legend :data='["Display", "Click", "Visit", "Consulting", "Order"]'  />
    <Tooltip />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[{
      value: 60,
      name: "Visit"
    }, {
      value: 40,
      name: "Consulting"
    }, {
      value: 20,
      name: "Order"
    }, {
      value: 80,
      name: "Click"
    }, {
      value: 100,
      name: "Display"
    }]
</script>
<template>
  <VueEcharts style="width:100%;height:300px;" >
    <Funnel name='漏斗图'  :data="data" />
    <Legend :data='["Display", "Click", "Visit", "Consulting", "Order"]'  />
    <Tooltip />
  </VueEcharts>
</template>
```

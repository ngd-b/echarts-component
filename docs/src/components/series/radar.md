# Radar 雷达图

<script setup>
  import { ref } from 'vue'

  const data = ref([{
      value: [4300, 10000, 28000, 35000, 50000, 19000],
      name: "Allocated Budget"
    }, {
      value: [5000, 14000, 28000, 31000, 42000, 21000],
      name: "Actual Spending"
    }])
</script>

## 基本用法

```vue

<template>
  <VueEcharts style="width:100%;height:300px;">
    <Radar :data="data" name="预算 vs 开销（Budget vs spending）" />
    <Legend :data='["Allocated Budget", "Actual Spending"]' />
    <Tooltip />
    <RadarAxis :indicator='[{
      name: "sales",
      max: 6500
    }, {
      name: "Administration",
      max: 16000
    }, {
      name: "Information Techology",
      max: 30000
    }, {
      name: "Customer Support",
      max: 38000
    }, {
      name: "Development",
      max: 52000
    }, {
      name: "Marketing",
      max: 25000
    }]' />
    <Title text="基础雷达图" />
  </VueEcharts>
</template>

```

<VueEcharts style="width:100%;height:300px;">
  <Radar :data="data" name="预算 vs 开销（Budget vs spending）" />
  <Legend :data='["Allocated Budget", "Actual Spending"]' />
  <Tooltip />
  <RadarAxis :indicator='[{
    name: "sales",
    max: 6500
  }, {
    name: "Administration",
    max: 16000
  }, {
    name: "Information Techology",
    max: 30000
  }, {
    name: "Customer Support",
    max: 38000
  }, {
    name: "Development",
    max: 52000
  }, {
    name: "Marketing",
    max: 25000
  }]' />
  <Title text="基础雷达图" />
</VueEcharts>

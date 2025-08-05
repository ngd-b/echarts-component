
# Pie 组件说明

`Pie` 组件用于在图表中创建饼图，是 ECharts 饼图配置的组件化实现。饼图是一种将数据按比例划分成不同扇形区域的图表类型，常用于展示各部分数据在总体中所占的比例关系。

<script setup>
  import { ref } from 'vue'

  const data = ref([
    { value: 12, name: '百度' },
    { value: 19, name: '谷歌' },
    { value: 3, name: '搜狗' },
    { value: 5, name: '360' },
    { value: 2, name: '神马' },
  ])
  const data2 = ref([
    { value: 5, name: '百度' },
    { value: 20, name: '谷歌' },
    { value: 8, name: '搜狗' },
    { value: 15, name: '360' },
    { value: 10, name: '神马' },
  ])
</script>

## 基本用法

```vue
<template>
  <VueEcharts style="width:100%;height:300px;">
    <!-- 基础饼图 -->
    <Pie 
      :data="data"
      name="访问来源" 
    />

    <Title text="用户访问来源分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

<VueEcharts style="width:100%;height:300px;">
  <Pie
    :data="data"
    name="访问来源"
  />
  <Title text="用户访问来源分布" />
  <Tooltip />
  <Legend show />
</VueEcharts>

## 环形图

通过设置 `radius` 属性可以创建环形图，该属性接受一个数组，分别表示内半径和外半径：

```vue
<template>
  <VueEcharts style="width:100%;height:300px;">
    <Pie 
     :data="data"
      name="设备分布" 
      :radius="['40%', '70%']"
    />

    <Title text="用户设备使用分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

<VueEcharts style="width:100%;height:300px;">
    <Pie
     :data="data"
      name="设备分布"
      :radius="['40%', '70%']"
    />
    <Title text="用户设备使用分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>

## 南丁格尔玫瑰图

通过设置 `roseType` 属性可以创建南丁格尔玫瑰图，该属性值为 `'radius'` 时，扇区的半径随数据大小而变化：

```vue
<template>
  <VueEchart style="width:100%;height:300px;">
    <Pie 
      :data="data"
      name="月度销量" 
      roseType="radius"
    />

    <Title text="月度销量玫瑰图" />
    <Tooltip />
    <Legend />
  </VueEchart>
</template>
```

<VueEcharts style="width:100%;height:300px;">
  <Pie
    :data="data"
    name="月度销量"
    roseType="radius"
  />
  <Title text="月度销量玫瑰图" />
  <Tooltip />
  <Legend />
</VueEcharts>

## 嵌套饼图

可以在同一个图表中使用多个 `Pie` 组件创建嵌套饼图，通过设置不同的 `radius` 来区分层级：

```vue
<template>
  <VueEcharts style="width:100%;height:300px;">
    <Pie 
     :data="data"
      name="产品类别" 
      :radius="['0%', '30%']"
    />
    <Pie 
     :data="data2"
      name="销售渠道" 
      :radius="['40%', '70%']"
    />

    <Title text="产品销售分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

<VueEcharts style="width:100%;height:300px;">
  <Pie
    :data="data"
    name="产品类别"
    :radius="['0%', '30%']"
  />
  <Pie
    :data="data2"
    name="销售渠道"
    :radius="['40%', '70%']"
  />
  <Title text="产品销售分布" />
  <Tooltip />
  <Legend />
</VueEcharts>

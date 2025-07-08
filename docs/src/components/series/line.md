# Line 组件说明

`Line` 组件用于在图表中创建折线图，是 ECharts 折线图配置的组件化实现。折线图是一种将数据点连接成线的图表类型，常用于展示数据随时间或其他连续变量的变化趋势。

## 基本用法

```vue
<template>
  <VueEcharts>
    <!-- 基础折线图 -->
    <Line :data="[12, 19, 3, 5, 2, 3]" name="数据" />

    <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
    <YAxis />
    <Title text="一周数据趋势" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

```

<script setup>
  import { ref } from 'vue'

  const data = ref([12, 19, 3, 5, 2, 3])
</script>

<div style="width:100%;height:300px;">
  <VueEcharts>
      <Line :data="[12, 19, 3, 5, 2, 3]" name="数据" />
      <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
      <YAxis />
      <Title text="一周数据趋势" />
  </VueEcharts>
</div>

## 多系列折线图

可以在同一个图表中使用多个 `Line` 组件创建多系列折线图：

```vue
<template>
  <VueEcharts>
    <Line :data="[12, 19, 3, 5, 2, 3]" name="数据A" />
    <Line :data="[5, 20, 8, 15, 10, 8]" name="数据B" />

    <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
    <YAxis />
    <Title text="多系列数据对比" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>

```

<div style="width:100%;height:300px;">
  <VueEcharts>
      <Line :data="[12, 19, 3, 5, 2, 3]" name="数据A" />
      <Line :data="[5, 20, 8, 15, 10, 8]" name="数据B" />
      <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
      <YAxis />
      <Title text="多系列数据对比" />
  </VueEcharts>
</div>

## 平滑曲线

通过设置 `smooth` 属性可以将折线转换为平滑曲线：

```vue
<template>
  <VueEcharts>
    <Line :data="[12, 19, 3, 5, 2, 3]" name="平滑曲线" smooth />

    <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
    <YAxis />
    <Title text="平滑曲线示例" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

```

<div style="width:100%;height:300px;">
  <VueEcharts>
      <Line :data="[12, 19, 3, 5, 2, 3]" name="数据" smooth />
      <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
      <YAxis />
      <Title text="一周数据趋势" />
  </VueEcharts>
</div>

## 阶梯线

通过设置 `step` 属性可以创建阶梯线图：

```vue
<template>
  <VueEcharts>
    <Line :data="[12, 19, 3, 5, 2, 3]" name="阶梯线" step />

    <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
    <YAxis />
    <Title text="阶梯线示例" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

```

<div style="width:100%;height:300px;">
  <VueEcharts>
      <Line :data="[12, 19, 3, 5, 2, 3]" name="数据" step />
      <XAxis :data="['周一', '周二', '周三', '周四', '周五', '周六']" />
      <YAxis />
      <Title text="一周数据趋势" />
  </VueEcharts>
</div>

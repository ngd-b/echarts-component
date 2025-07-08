# Bar 组件说明

`Bar` 组件用于在图表中创建柱状图，是 ECharts 柱状图配置的组件化实现。柱状图使用矩形条表示数据，常用于比较不同类别之间的数据差异。

## 基本用法

```vue
<template>
  <VueEcharts>
    <!-- 基础柱状图 -->
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
    
    <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
    <YAxis />
    <Title text="商品销量统计" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

```

## 横向柱状图

通过配置 `xAxis` 和 `yAxis` 的位置可以创建横向柱状图：

```vue
<template>
  <VueEcharts>
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
    
    <XAxis type="value" />
    <YAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
    <Title text="横向柱状图示例" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

```

## 多系列柱状图

在同一图表中使用多个 `Bar` 组件可以创建多系列柱状图：

```vue
<template>
  <VueEcharts>
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="2023年销量" />
    <Bar :data="[85, 79, 90, 91, 66, 75]" name="2024年销量" />
    
    <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
    <YAxis />
    <Title text="两年销量对比" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>

```

## 堆叠柱状图

通过设置相同的 `stack` 属性值可以创建堆叠柱状图：

```vue
<template>
  <VueEcharts >
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="直接访问" stack="总量" />
    <Bar :data="[28, 48, 40, 19, 86, 27]" name="邮件营销" stack="总量" />
    <Bar :data="[32, 23, 34, 29, 16, 37]" name="联盟广告" stack="总量" />
    
    <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
    <YAxis />
    <Title text="流量来源分布" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>

```

## 百分比堆叠柱状图

结合 `stack` 和 `percent` 配置可以创建百分比堆叠柱状图：

```vue
<template>
  <VueEcharts >
    <Bar :data="[60, 40, 30, 70, 50, 65]" name="直接访问" stack="总量" :label="{ show: true, position: 'inside' }" />
    <Bar :data="[40, 60, 70, 30, 50, 35]" name="间接访问" stack="总量" :label="{ show: true, position: 'inside' }" />
    
    <XAxis :data="['产品A', '产品B', '产品C', '产品D', '产品E', '产品F']" />
    <YAxis type="value" />
    <Title text="销售渠道占比" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>

```

## 与其他图表混合使用

`Bar` 组件可以与其他图表组件（如 `Line`）混合使用，创建复合图表：

```vue
<template>
  <VueEcharts :auto-resize="true" style="height: 400px">
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
    <Line :data="[28, 48, 40, 19, 86, 27]" name="增长率" y-axis-index="1" />
    
    <XAxis :data="['一月', '二月', '三月', '四月', '五月', '六月']" />
    <YAxis name="销量" />
    <YAxis name="增长率" axis-index="1" />
    <Title text="销量与增长率对比" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>

```

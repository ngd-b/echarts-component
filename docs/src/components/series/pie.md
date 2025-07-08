
# Pie 组件说明

`Pie` 组件用于在图表中创建饼图，是 ECharts 饼图配置的组件化实现。饼图是一种将数据按比例划分成不同扇形区域的图表类型，常用于展示各部分数据在总体中所占的比例关系。

## 基本用法

```vue
<template>
  <VueEcharts>
    <!-- 基础饼图 -->
    <Pie 
      :data="[12, 19, 3, 5, 2, 3]"
      name="访问来源" 
    />

    <Title text="用户访问来源分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

## 环形图

通过设置 `radius` 属性可以创建环形图，该属性接受一个数组，分别表示内半径和外半径：

```vue
<template>
  <VueEcharts>
    <Pie 
     :data="[12, 19, 3, 5, 2, 3]"
      name="设备分布" 
      :radius="['40%', '70%']"
    />

    <Title text="用户设备使用分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

## 南丁格尔玫瑰图

通过设置 `roseType` 属性可以创建南丁格尔玫瑰图，该属性值为 `'radius'` 时，扇区的半径随数据大小而变化：

```vue
<template>
  <VueEcharts>
    <Pie 
      :data="[12, 19, 3, 5, 2, 3]"
      name="月度销量" 
      roseType="radius"
    />

    <Title text="月度销量玫瑰图" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

## 嵌套饼图

可以在同一个图表中使用多个 `Pie` 组件创建嵌套饼图，通过设置不同的 `radius` 来区分层级：

```vue
<template>
  <VueEcharts>
    <Pie 
     :data="[12, 19, 3, 5, 2, 3]"
      name="产品类别" 
      :radius="['0%', '30%']"
    />
    <Pie 
     :data="[5, 20, 8, 15, 10, 8]"
      name="销售渠道" 
      :radius="['40%', '70%']"
    />

    <Title text="产品销售分布" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>
```

---
prev:
  text: "安装"
  link: "/guide/installer"
next:
  text: "Line"
  link: "/components/series/line"
---

# VueEcharts 组件说明

## 概述

`VueEcharts` 是 `echarts-component` 库中的核心组件，用作所有图表的根容器。它负责初始化 ECharts 实例、管理生命周期以及处理与子组件的通信。通过这个组件，你可以轻松地将 ECharts 图表集成到 Vue 应用中，并利用组件化的优势来构建复杂的数据可视化界面。

## 使用方式

VueEcharts 组件还支持组件化的配置方式，通过嵌套子组件来构建图表：

```vue
<template>
  <VueEcharts>
    <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
    <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
    <YAxis />
    <Title text="商品销量统计" />
    <Tooltip trigger="axis" />
    <Legend />
  </VueEcharts>
</template>
```

## 与原生 ECharts 的对比

| 特性                 | VueEcharts 组件化方式               | 原生 ECharts 方式               |
|----------------------|-------------------------------------|----------------------------------|
| 代码结构             | 组件嵌套，结构清晰                  | 单一 JSON 对象，复杂配置易混乱   |
| 类型安全             | 完整 TypeScript 支持                | 需要手动定义类型                |
| 响应式更新           | 自动响应数据变化                    | 需要手动调用 setOption          |
| 生命周期管理         | 自动处理                            | 需要手动管理                   |
| 事件绑定             | 直接通过事件属性绑定                | 需要手动调用 on 方法            |
| 组件复用             | 易于创建可复用的图表组件            | 需要自行封装                   |

## Composition API 支持

### 使用 useVueEcharts 组合式函数

`echarts-component`提供了 `useVueEcharts` 组合式函数，让你可以在 Composition API 中更方便地使用 ECharts。

#### 基本用法

```vue
<template>
 <VueEcharts>
    <!-- 组件配置  -->
 </VueEcharts>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useVueEcharts } from 'echarts-component'

const { echartRef } = useVueEcharts()

```

#### 返回值

`useVueEcharts` 函数返回一个包含以下属性和方法的对象：

| 属性/方法       | 描述                                                                 |
|-----------------|----------------------------------------------------------------------|
| `echartRef` | ECharts 实例的实例对象，可以用来访问原生 ECharts API                |


# vue-echarts-components

> 🧩 基于 Vue 3 的组件化 ECharts 图表框架

使用 Vue 组件的方式来配置和渲染 ECharts，让图表构建更直观、声明式、可组合。

---

## ✨ 特性

- 🔧 所有 ECharts 配置项都是 Vue 组件
- 🎨 多个图表类型组合支持（如 Pie、Line、Bar 混合）
- ⚡ 响应式更新，无需手动调用 `setOption`
- 💎 完整 TypeScript 类型提示
- 💡 支持组合式 API `useVueEcharts()`

---

## 📦 安装

```bash
npm install vue-echarts-components
# or
pnpm add vue-echarts-components
# or
yarn add vue-echarts-components
````

---

## 🧩 使用示例

```vue
<script setup>
import { VueEcharts, Pie, XAxis, Title } from 'vue-echarts-components'

const data = [
  { value: 40, name: 'A' },
  { value: 32, name: 'B' },
  { value: 28, name: 'C' },
]
</script>

<template>
  <VueEcharts>
    <Title text="Demo Pie Chart" left="center" />
    <XAxis :data="[1, 2, 3, 4]" />
    <Pie :data="data" :center="['50%', '50%']" />
  </VueEcharts>
</template>
```

---

## 🧱 支持的组件

| 组件名            | 对应配置字段               | 描述                 |
| -------------- | -------------------- | ------------------ |
| `<VueEcharts>` | 容器组件                 | 提供 ECharts 实例并收集配置 |
| `<Pie />`      | `series`（type: pie）  | 饼图组件               |
| `<Line />`     | `series`（type: line） | 折线图组件              |
| `<Bar />`      | `series`（type: bar）  | 柱状图组件              |
| `<XAxis />`    | `xAxis`              | X 轴配置              |
| `<YAxis />`    | `yAxis`              | Y 轴配置              |
| `<Title />`    | `title`              | 图表标题               |
| `<Grid />`     | `grid`               | 坐标轴网格配置            |
| `<Tooltip />`  | `tooltip`            | 悬浮提示               |
| `<Legend />`   | `legend`             | 图例组件               |

更多组件开发中……

---

## 🧠 背后理念

该项目灵感来源于：

- Vue 3 组合式 API 与模板语法的声明式表达
- 将复杂 ECharts 配置模块化、组件化

目标是让每个配置项都可以通过 Vue 组件表达，使图表逻辑更清晰、可复用、响应式更自然。

---

## 🔧 开发中计划

- [x] 多 series 支持
  - [x] `Line` 折线图
  - [x] `Bar` 柱状图
  - [x] `Pie` 饼图
- [ ] 支持 `v-for` 渲染多个图形
- [ ] `useVueEcharts()` 组合式调用方式
- [ ] 自动注册组件 / 按需加载
- [ ] 主题注册 & 暗黑模式支持
- [ ] 图表容器大小自适应

---

## 📄 License

MIT License © 2025 [hboot](https://github.com/ngd-b)

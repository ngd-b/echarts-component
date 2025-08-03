# 安装与使用指南

## 安装

::: code-group

```sh [npm]
npm install @echarts-component/vue echarts
```

```sh [yarn]
yarn add @echarts-component/vue echarts
```

```sh [pnpm]
pnpm add @echarts-component/vue echarts
```

:::

## 全局引入

在项目的入口文件（通常是 `main.js` 或 `main.ts`）中全局引入组件库：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import VueEChartsComponents from '@echarts-component/vue'

const app = createApp(App)
app.use(VueEChartsComponents)
app.mount('#app')

```

## 按需引入

如果你只需要使用部分组件，可以按需引入以减少打包体积：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { VueEcharts, Line, Bar, XAxis, YAxis, Title, Tooltip, Legend } from '@echarts-component/vue'

const app = createApp(App)

// 注册需要的组件
app.component('VueEcharts', VueEcharts)
app.component('Line', Line)
app.component('Bar', Bar)
// 注册其他需要的组件

app.mount('#app')
```

## 响应式图表

所有图表默认支持响应式布局。当容器大小变化时，图表会自动重新渲染。你也可以通过 `auto-resize` 属性控制这一行为：

```ts
<VueEcharts :auto-resize="true" style="height: 400px; width: 100%">
  <!-- 图表配置 -->
</VueEcharts>

```

## 混合使用 JSON 配置

如果你需要使用一些组件库中尚未封装的 ECharts 特性，可以混合使用传统的 JSON 配置：

```ts
<template>
  <VueEcharts :auto-resize="true" style="height: 300px">
    <Title text="混合配置示例" />
    <Tooltip />
    <Legend />
  </VueEcharts>
</template>

<script setup lang="tsx">
import { useVueEcharts } from "@echarts-component/vue";


const {
  setOption,
} = useVueEcharts();

onMounted(() => {
  setOption({
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'bar',
      data: [10, 20, 30, 40, 50]
    }]
  })
})
</script>

```

## 类型支持

组件库提供完整的 TypeScript 类型定义，你可以在组件中使用类型提示：

```ts
import { defineComponent } from 'vue'
import type { LineOptions } from '@echarts-component/vue'

export default defineComponent({
  setup() {
    const lineData: LineOptions = {
      data: [12, 19, 3, 5, 2, 3]
    }
    return {
      lineData
    }
  }
})
```

## 常见问题

### 1. 为什么图表没有显示？

- 请确保你已经正确引入了所需的 ECharts 模块
- 检查图表容器是否有明确的宽高
- 确保数据格式正确

### 2. 如何更新图表数据？

你可以通过修改组件的 `data` 属性来更新图表数据，Vue 的响应式系统会自动处理图表更新。

### 3. 如何自定义图表样式？

大多数组件都支持 `style` 和 `class` 属性，你可以通过这些属性自定义图表样式。此外，部分组件还提供了专门的样式属性。

### 4. 如何使用 ECharts 的事件？

可以通过hooks`useVueEcharts`需要监听的函数，直接调用；你也可以通过 `@` 指令绑定 ECharts 事件

```ts
<VueEcharts>
  <!-- 图表配置 -->
</VueEcharts>

<script setup lang="tsx">
import { useVueEcharts } from "@echarts-component/vue";

const {
  onClick,
} = useVueEcharts();

onMounted(() => {
  onClick((event) => {
    console.log("点击了", event);
  });
});
```

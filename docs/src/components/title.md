# Title 标题组件

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  const data =[]
</script>

<VueEcharts style="width:100%;height:300px;" >
    <Title text="Main Title" subtext="Sub Title" left="center" top='center'>
        <Text prop="textStyle" :fontSize="30" />
        <Text prop="subtextStyle" :fontSize="20" />
    </Title>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" >
        <Title text="Main Title" subtext="Sub Title" left="center" top='center'>
            <Text prop="textStyle" :fontSize="30" />
            <Text prop="subtextStyle" :fontSize="20" />
        </Title>
    </VueEcharts>
</template>
```

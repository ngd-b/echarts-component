# Matrix 矩阵坐标系组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const matriXData = Array.from({ length: 8 }, (v, k) => k + 1).map(i => ({value:"X"+i}))
    const matriYData = Array.from({ length: 8 }, (v, k) => k + 1).map(i => ({value:"Y"+i}))
    const data = ref([]);

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        for(let i = 1;i<=8;i++){
            for(let j=1;j<=8;j++){
                if (i >= j) {
                    data.value.push(['X' + i, 'Y' + j, i === j ? 1 : Math.random() * 2 - 1]);
                }
            }
        }
        console.log(getOption(),options.value)
    })
</script>

<VueEcharts style="width:100%;height:300px;position:relative;">
   <Matrix :top='80'>
    <X :data='matriXData' />
    <Y :data='matriYData' />
   </Matrix>
   <VisualMap type='continuous' :min='-1' :max='1' :dimension='2' calculable orient='horizontal' :top='5' left='center' />
   <Heatmap coordinateSystem='matrix' :data='data'>
    <Text prop='label' show :formatter="(params) => params.value[2].toFixed(2)" />
   </Heatmap>
</VueEcharts>

## 基本用法

```vue
<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const matriXData = Array.from({ length: 8 }, (v, k) => k + 1).map(i => ({value:"X"+i}))
    const matriYData = Array.from({ length: 8 }, (v, k) => k + 1).map(i => ({value:"Y"+i}))
    const data = ref([]);

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        for(let i = 1;i<=8;i++){
            for(let j=1;j<=8;j++){
                if (i >= j) {
                    data.value.push(['X' + i, 'Y' + j, i === j ? 1 : Math.random() * 2 - 1]);
                }
            }
        }
        console.log(getOption(),options.value)
    })
</script>

<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
        <Matrix :top='80'>
            <X :data='matriXData' />
            <Y :data='matriYData' />
        </Matrix>
        <VisualMap type='continuous' :min='-1' :max='1' :dimension='2' calculable orient='horizontal' :top='5' left='center' />
        <Heatmap coordinateSystem='matrix' :data='data'>
            <Text prop='label' :formatter="(params) => params.value[2].toFixed(2)" />
        </Heatmap>
    </VueEcharts>
</template>
```

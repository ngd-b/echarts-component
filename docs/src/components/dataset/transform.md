# Transform 数据集数据转换

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const data = [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
    ]
    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

## 基本用法

<VueEcharts style="width:100%;height:300px;position:relative;">
    <Dataset :source='data' />
    <Dataset>
        <Transform type='filter' :config="{dimension: 'Year', value: 2011}" />
    </Dataset>
    <Dataset>
        <Transform type='filter' :config="{dimension: 'Year', value: 2012}" />
    </Dataset>
    <Dataset>
        <Transform type='filter' :config="{dimension: 'Year', value: 2013}" />
    </Dataset>
    <Pie :radius='50' :center="['25%', '50%']" :datasetIndex='1' />
    <Pie :radius='50' :center="['50%', '50%']" :datasetIndex='2' />
    <Pie :radius='50' :center="['75%', '50%']" :datasetIndex='3' />
</VueEcharts>

```vue
<script setup>
    import { ref } from 'vue'

    const data = [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
        <Dataset :source='data' />
        <Dataset>
            <Transform type='filter' :config="{dimension: 'Year', value: 2011}" />
        </Dataset>
        <Dataset>
            <Transform type='filter' :config="{dimension: 'Year', value: 2012}" />
        </Dataset>
        <Dataset>
            <Transform type='filter' :config="{dimension: 'Year', value: 2013}" />
        </Dataset>
        <Pie :radius='50' :center="['25%', '50%']" :datasetIndex='1' />
        <Pie :radius='50' :center="['50%', '50%']" :datasetIndex='2' />
        <Pie :radius='50' :center="['75%', '50%']" :datasetIndex='3' />
    </VueEcharts>
</template>
```

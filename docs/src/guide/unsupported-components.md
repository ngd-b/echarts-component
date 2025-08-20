
# 不支持组件使用的配置说明

存在一些配置不支持组件化使用，但仍然可以通过混合使用 JSON 配置解决。

> 将来可能会支持组件化调用方式。

## `aria`

无障碍访问配置。支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问

<VueEcharts style="width:100%;height:300px;">
  <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
  <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
  <YAxis />
  <Title text="商品销量统计" />
</VueEcharts>

<script setup>
    import {onMounted} from 'vue'
    import { useVueEcharts } from '@echarts-component/vue'

    const { setOption } = useVueEcharts()

    onMounted(() => {
        setOption({
            aria:{
                enabled: true
            }
        })
    })
</script>

```vue
<template>
    <VueEcharts style="width:100%;height:300px;">
        <Bar :data="[65, 59, 80, 81, 56, 55]" name="销量" />
        <XAxis :data="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']" />
        <YAxis />
        <Title text="商品销量统计" />
    </VueEcharts>
</template>
<script setup>
    import {onMounted} from 'vue'
    import { useVueEcharts } From '@echarts-component/vue'

    const { setOption } = useVueEcharts()

    onMounted(() => {
        setOption({
            aria:{
                enabled: true
            }
        })
    })
</script>
```

## `media`

媒体查询自适应配置。自适应配置需要根据不同屏幕的大小来设置不同的配置，可以通过配置JSON的方式设置媒体查询自适应。

```vue
<script setup>
    import {onMounted} from 'vue'
    import { useVueEcharts } From '@echarts-component/vue'

    const { setOption } = useVueEcharts()

    onMounted(() => {
        setOption({
            media:[
                { 
                    query:{
                        minWidth: 600,
                    },
                    option:{ 
                        xAxis: {},
                        title:{},
                        // ... 其他
                    }
                },
                { 
                    query:{
                        minWidth: 1200,
                    },
                    option:{ 
                        xAxis: {},
                        title:{},
                        // ... 其他
                    }
                }
            ]
        })
    })
</script>
```

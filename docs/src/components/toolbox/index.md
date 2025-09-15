# Toolbox 工具栏组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const data =[]
    const markPoint = [
        [{
        type: "max",
        name: "Max"
      }, {
        type: "min",
        name: "Min"
      }],
      [{
        name: "周最低",
        value: -2,
        xAxis: 1,
        yAxis: -1.5
      }]
    ]
    const markLine = [
         [{
        type: "average",
        name: "Avg"
      }],
      [{
          type: "average",
          name: "Avg"
        },
        [{
          symbol: "none",
          x: "90%",
          yAxis: "max"
        }, {
          symbol: "circle",
          label: {
            position: "start",
            formatter: "Max"
          },
          type: "max",
          name: "Top"
        }]
      ]
    ]
    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<VueEcharts style="width:100%;height:300px;position:relative;">
    <Toolbox show>
        <Feature prop='dataZoom' yAxisIndex='none' />
        <Feature prop='dataView' :readOnly='false' />
        <Feature prop='magicType' :type='["line", "bar"]' />
        <Feature prop='restore' />
        <Feature prop='saveAsImage' />
    </Toolbox>
    <XAxis type='category' :boundaryGap='false' :data='["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]' />
    <YAxis type='value' :z='10'>
        <Text prop='axisLabel' formatter='{value} °C'  />
    </YAxis>
    <Line name='最高气温' :data='[11, 11, 15, 13, 12, 13, 10]'>
        <MarkPoint :data='markPoint[0]' />
        <MarkLine :data='markLine[0]' />
    </Line>
    <Line name='最低气温' :data='[1, -2, 2, 5, 3, 2, 0]'>
        <MarkPoint :data='markPoint[1]' />
        <MarkLine :data='markLine[1]' />
    </Line>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const markPoint = [
        [
            {
                type: "max",
                name: "Max"
            }, {
                type: "min",
                name: "Min"
            }
        ],
        [
            {
                name: "周最低",
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }
        ]
    ]
    const markLine = [
        [
            {
                type: "average",
                name: "Avg"
            }
        ],
        [
            {
            type: "average",
            name: "Avg"
            },
            [
                {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                }, 
                {
                    symbol: "circle",
                    label: {
                        position: "start",
                        formatter: "Max"
                    },
                    type: "max",
                    name: "Top"
                }
            ]
        ]
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
        <Toolbox show>
            <Feature prop='dataZoom' yAxisIndex='none' />
            <Feature prop='dataView' :readOnly='false' />
            <Feature prop='magicType' :type='["line", "bar"]' />
            <Feature prop='restore' />
            <Feature prop='saveAsImage' />
        </Toolbox>
        <XAxis type='category' :boundaryGap='false' :data='["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]' />
        <YAxis type='value' :z='10'>
            <Text prop='axisLabel' formatter='{value} °C'  />
        </YAxis>
        <Line name='最高气温' :data='[11, 11, 15, 13, 12, 13, 10]'>
            <MarkPoint :data='markPoint[0]' />
            <MarkLine :data='markLine[0]' />
        </Line>
        <Line name='最低气温' :data='[1, -2, 2, 5, 3, 2, 0]'>
            <MarkPoint :data='markPoint[1]' />
            <MarkLine :data='markLine[1]' />
        </Line>
    </VueEcharts>
</template>
```

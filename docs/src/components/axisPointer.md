# AxisPointer 坐标轴指示器组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const data =[
        [
            ["2016-10-4", 25],
            ["2016-10-5", 16],
            ["2016-10-6", 6],
            ["2016-10-7", 13],
            ["2016-10-8", 6],
            ["2016-10-9", 9],
            ["2016-10-10", 14],
            ["2016-10-11", 24],
            ["2016-10-12", 17]
        ],
        [
            ["2016-10-4", 15],
            ["2016-10-5", 12],
            ["2016-10-6", 17],
            ["2016-10-7", 14],
            ["2016-10-8", 12],
            ["2016-10-9", 19],
            ["2016-10-10", 12],
            ["2016-10-11", 14],
            ["2016-10-12", 11]
        ]
    ]
    const { getOption } = useVueEcharts();
    onMounted(() => {
        console.log(getOption())
    })
</script>

<VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
    <Legend :data='["意向"]' top='bottom' />
    <Tooltip triggerOn='none' alwaysShowContent :position="(pt)=>[pt[0], 130]"  />
    <XAxis type='time'>
        <SplitLine :show='false' />
        <AxisPointer value='2016-10-7' snap>
            <Text prop='label' show :formatter="(params)=>echarts.format.formatTime('yyyy-MM-dd', params.value)" />
            <Handle show />
        </AxisPointer>
    </XAxis>
    <YAxis type='value' :z='10'>
        <AxisTick show />
        <SplitLine :show='false' />
        <Text prop='axisLabel' :inside='true'  />
    </YAxis>
    <Grid :top='110' :left='15' :right='15'  :bottom='80' />
    <Line name='模拟数据' smooth symbol='circle' :symbolSize='5' sampling='lttb' stack='a' :data='data[0]'>
        <AreaStyle />
        <ItemStyle color='#8ec6ad' />
    </Line>
    <Line name='模拟数据' smooth symbol='circle' :symbolSize='5' sampling='lttb' stack='a' :data='data[0]'>
        <AreaStyle />
        <ItemStyle color='#d68262' />
    </Line>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[
        [
            ["2016-10-4", 25],
            ["2016-10-5", 16],
            ["2016-10-6", 6],
            ["2016-10-7", 13],
            ["2016-10-8", 6],
            ["2016-10-9", 9],
            ["2016-10-10", 14],
            ["2016-10-11", 24],
            ["2016-10-12", 17]
        ],
        [
            ["2016-10-4", 15],
            ["2016-10-5", 12],
            ["2016-10-6", 17],
            ["2016-10-7", 14],
            ["2016-10-8", 12],
            ["2016-10-9", 19],
            ["2016-10-10", 12],
            ["2016-10-11", 14],
            ["2016-10-12", 11]
        ]
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
        <Legend :data='["意向"]' top='bottom' />
        <Tooltip triggerOn='none' alwaysShowContent :position="(pt)=>[pt[0], 130]"  />
        <XAxis type='time'>
            <SplitLine :show='false' />
            <AxisPointer value='2016-10-7' snap>
                <Text prop='label' show :formatter="(params)=>echarts.format.formatTime('yyyy-MM-dd', params.value)" />
                <Handle show />
            </AxisPointer>
        </XAxis>
        <YAxis type='value' :z='10'>
            <AxisTick show />
            <SplitLine :show='false' />
            <Text prop='axisLabel' :inside='true'  />
        </YAxis>
        <Grid :top='110' :left='15' :right='15'  :bottom='80' />
        <Line name='模拟数据' smooth symbol='circle' :symbolSize='5' sampling='lttb' stack='a' :data='data[0]'>
            <AreaStyle />
            <ItemStyle color='#8ec6ad' />
        </Line>
        <Line name='模拟数据' smooth symbol='circle' :symbolSize='5' sampling='lttb' stack='a' :data='data[0]'>
            <AreaStyle />
            <ItemStyle color='#d68262' />
        </Line>
    </VueEcharts>
</template>
```

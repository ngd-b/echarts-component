# Break 断轴的截断数据

<script setup>
    import { ref, onMounted } from 'vue'
    import * as echarts from 'echarts';
    import { useVueEcharts } from '@echarts-component/vue'

    const data =[]
    const breakData = [
        {
            start: 5000,
            end: 100000,
            gap: '2%'
        }
    ]

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<VueEcharts style="width:100%;height:300px;">
    <Title left='center' text='Bar Chart with Axis Break (Brush-enabled)' subtext='Brush to create a new axis break. \n Click on the break area to reset.'>
        <Text prop='textStyle' :fontSize='20' />
        <Text prop='subtextStyle' :fontSize='15' color='#175ce5' fontWeight='bold' />
    </Title>
    <Tooltip trigger='axis'>
        <AxisPointer type='shadow' />
    </Tooltip>
    <Legend />
    <Grid :top='120' :bottom='80' />
    <XAxis type='category' :data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" />
    <YAxis type='value'>
        <Break v-for="(item,index) in breakData" :key="index" v-bind="item" />
        <BreakArea :zigzagMaxSpan='15' :zigzagAmplitude='2' :zigzagZ='200'>
            <ItemStyle :opacity='1' />
        </BreakArea>
    </YAxis>
    <Bar name='Data A' :data='[1500, 2032, 2001, 3154, 2190, 4330, 2410]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data B' :data='[1200, 1320, 1010, 1340, 900, 2300, 2100]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data C' :data='[103200, 100320, 103010, 102340, 103900, 103300, 103200]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data D' :data=' [106212, 102118, 102643, 104631, 106679, 100130, 107022]'>
        <Emphasis focus='series' />
    </Bar>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref, onMounted } from 'vue'
    import * as echarts from 'echarts';
    import { useVueEcharts } from '@echarts-component/vue'

    const data =[]
    const breakData = [
        {
            start: 5000,
            end: 100000,
            gap: '2%'
        }
    ]

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<template>
<VueEcharts style="width:100%;height:300px;">
    <Title left='center' text='Bar Chart with Axis Break (Brush-enabled)' subtext='Brush to create a new axis break.\n Click on the break area to reset.'>
        <Text prop='textStyle' :fontSize='20' />
        <Text prop='subtextStyle' :fontSize='15' color='#175ce5' fontWeight='bold' />
    </Title>
    <Tooltip trigger='axis'>
        <AxisPointer type='shadow' />
    </Tooltip>
    <Legend />
    <Grid :top='120' :bottom='80' />
    <XAxis type='category' :data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" />
    <YAxis type='value'>
        <Break v-for="(item,index) in breakData" :key="index" v-bind="item" />
        <BreakArea :zigzagMaxSpan='15' :zigzagAmplitude='2' :zigzagZ='200'>
            <ItemStyle :opacity='1' />
        </BreakArea>
    </YAxis>
    <Bar name='Data A' :data='[1500, 2032, 2001, 3154, 2190, 4330, 2410]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data B' :data='[1200, 1320, 1010, 1340, 900, 2300, 2100]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data C' :data='[103200, 100320, 103010, 102340, 103900, 103300, 103200]'>
        <Emphasis focus='series' />
    </Bar>
    <Bar name='Data D' :data=' [106212, 102118, 102643, 104631, 106679, 100130, 107022]'>
        <Emphasis focus='series' />
    </Bar>
</VueEcharts>
</template>
```

# Graphic 原生图形元素组件

<script setup>
    import { ref,onMounted } from 'vue'
    import { useVueEcharts } from '@echarts-component/vue'

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<VueEcharts style="width:100%;height:300px;position:relative;">
   <Legend :data="['Altitude (km) vs Temperature (°C)']" />
   <Tooltip trigger='axis' formatter='Temperature : <br/>{b}km : {c}°C' />
   <Grid left='3%' right='4%' bottom='3%' containLabel  />
   <XAxis type='value'>
    <Text prop='axisLabel' formatter="{value}°C" />
   </XAxis>
   <YAxis type='category' boundaryGap :data="['0', '10', '20', '30', '40', '50', '60', '70', '80']">
    <AxisLine :onZero='false' />
    <Text prop='axisLabel' formatter='{value} km' />
   </YAxis>
   <Graphic>
    <RenderGroup :rotation='Math.PI / 4' bounding='raw' :right='110' :bottom='110' :z='100'>
        <RenderRect left='center' top='middle' :z='100'>
            <Shape :width='240' :height='50' />
            <ShapeStyle fill='rgba(0,0,0,0.3)' />
        </RenderRect>
        <RenderText left='center' top='center' :z='100'>
            <ShapeStyle fill='#fff' text='ECHARTS LINE CHART' font='bold 26px sans-serif' />
        </RenderText>
    </RenderGroup>
    <RenderGroup left='10%' top='center'>
        <RenderRect left='center' top='middle' :z='100'>
            <Shape :width='240' :height='90' />
            <ShapeStyle fill='#fff' stroke='#555' :lineWidth='1' :shadowBlur='8' :shadowOffsetX='3' :shadowOffsetY='3' shadowColor='rgba(0,0,0,0.2)' />
        </RenderRect>
        <RenderText left='center' top='center' :z='100'>
            <ShapeStyle fill='#333' :width='200' overflow='break' text='xAxis represents temperature in °C, yAxis represents altitude in km, An image watermark in the upper right, This text block can be placed in any place' font='14px Microsoft YaHe' />
        </RenderText>
    </RenderGroup>
   </Graphic>
   <Line name='高度(km)与气温(°C)变化关系' smooth :data=' [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]' />
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref,onMounted } from 'vue'
    import { useVueEcharts } from '@echarts-component/vue'

    const { getOption,options } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
    })
</script>

<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
    <Legend :data="['Altitude (km) vs Temperature (°C)']" />
    <Tooltip trigger='axis' formatter='Temperature : <br/>{b}km : {c}°C' />
    <Grid left='3%' right='4%' bottom='3%' containLabel  />
    <XAxis type='value'>
        <Text prop='axisLabel' formatter="{value}°C" />
    </XAxis>
    <YAxis type='category' boundaryGap :data="['0', '10', '20', '30', '40', '50', '60', '70', '80']">
        <AxisLine :onZero='false' />
        <Text prop='axisLabel' formatter='{value} km' />
    </YAxis>
    <Graphic>
        <RenderGroup :rotation='Math.PI / 4' bounding='raw' :right='110' :bottom='110' :z='100'>
            <RenderRect left='center' top='middle' :z='100'>
                <Shape :width='240' :height='50' />
                <ShapeStyle fill='rgba(0,0,0,0.3)' />
            </RenderRect>
            <RenderText left='center' top='center' :z='100'>
                <ShapeStyle fill='#fff' text='ECHARTS LINE CHART' font='bold 26px sans-serif' />
            </RenderText>
        </RenderGroup>
        <RenderGroup left='10%' top='center'>
            <RenderRect left='center' top='middle' :z='100'>
                <Shape :width='240' :height='90' />
                <ShapeStyle fill='#fff' stroke='#555' :lineWidth='1' :shadowBlur='8' :shadowOffsetX='3' :shadowOffsetY='3' shadowColor='rgba(0,0,0,0.2)' />
            </RenderRect>
            <RenderText left='center' top='center' :z='100'>
                <ShapeStyle fill='#333' :width='200' overflow='break' text='xAxis represents temperature in °C, yAxis represents altitude in km, An image watermark in the upper right, This text block can be placed in any place' font='14px Microsoft YaHe' />
            </RenderText>
        </RenderGroup>
    </Graphic>
    <Line name='高度(km)与气温(°C)变化关系' smooth :data=' [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]' />
    </VueEcharts>
</template>
```

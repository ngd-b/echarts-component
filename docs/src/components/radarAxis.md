# RadarAxis 雷达图坐标系

<script setup>
  import { ref } from 'vue'
  import * as echarts from 'echarts';

    const data =[
      { text: '指标一' },
      { text: '指标二' },
      { text: '指标三' },
      { text: '指标四' },
      { text: '指标五' }
    ]
</script>

<VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
   <RadarAxis :indicator="data" :center="['50%', '50%']" radius='80%' :startAngle='90' :splitNumber='4' shape='circle'>
      <Text prop='axisName' formatter='【{value}】' color='#72ACD1' />
      <SplitArea>
        <AreaStyle :color="['#B8D3E4', '#96C5E3', '#7DB5DA', '#72ACD1']" />
      </SplitArea>
      <AxisTick show>
        <LineStyle color='rgba(255, 255, 255, 0.8)' />
      </AxisTick>
      <Text prop='axisLabel' show color='white' />
      <AxisLine>
        <LineStyle color='rgba(255, 255, 255, 0.4)' />
      </AxisLine>
      <SplitLine>
        <LineStyle color='rgba(255, 255, 255, 0.4)' />
      </SplitLine>
   </RadarAxis>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref } from 'vue'

    const data =[
      { text: '指标一' },
      { text: '指标二' },
      { text: '指标三' },
      { text: '指标四' },
      { text: '指标五' }
    ]
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" :animationDuration='2000'>
        <RadarAxis :indicator="data" :center="['50%', '50%']" radius='80%' :startAngle='90' :splitNumber='4' shape='circle'>
            <Text prop='axisName' formatter='【{value}】' color='#72ACD1' />
            <SplitArea>
                <AreaStyle :color="['#B8D3E4', '#96C5E3', '#7DB5DA', '#72ACD1']" />
            </SplitArea>
            <AxisTick show>
                <LineStyle color='rgba(255, 255, 255, 0.8)' />
            </AxisTick>
            <Text prop='axisLabel' show color='white' />
            <AxisLine>
                <LineStyle color='rgba(255, 255, 255, 0.4)' />
            </AxisLine>
            <SplitLine>
                <LineStyle color='rgba(255, 255, 255, 0.4)' />
            </SplitLine>
        </RadarAxis>
    </VueEcharts>
</template>
```

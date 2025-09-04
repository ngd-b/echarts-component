# Brush 区域选择组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

    const data =[]

    const { getOption,options,onBrushselected,setOption } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value);
        onBrushselected((params)=>{
            let brushed = [];
            let brushComponent = params.batch[0];
            for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                let rawIndices = brushComponent.selected[sIdx].dataIndex;
                brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
            }
            console.log('brushed item: ' + brushed.join('\n'));
            setOption({
                title: {
                    backgroundColor: '#333',
                    text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                    bottom: 0,
                    right: '10%',
                    width: 100,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }
            })
        })
    })
</script>

<VueEcharts style="width:100%;height:300px;position:relative;">
    <Legend :data="['bar', 'bar2', 'bar3', 'bar4']" left='10%' />
    <Brush :toolbox="['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear']" :xAxisIndex='0' />
    <Toolbox>
        <Feature prop='dataView' />
        <Feature prop='magicType' :type='["stack"]' />
    </Toolbox>
    <XAxis name='X Axis'  :data='["Class 0","Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9"]'>
        <AxisLine onZero />
        <SplitLine :show='false' />
        <SplitArea :show='false' />
    </XAxis>
    <YAxis />
    <Bar name='bar' stack='one' :data='[1.84,0.5,1.05,0.93,0.5,1.56,0.2,0.59,1.29,1.59]'>
        <Emphasis>
            <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
        </Emphasis>
    </Bar>
    <Bar name='bar2' stack='one' :data='[1.05,0.93,0.5,1.56,0.5,1.29,0.2,0.59,1.05,0.5]'>
        <Emphasis>
            <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
        </Emphasis>
    </Bar>
    <Bar name='bar3' stack='one' :data='[0.5,1.29,1.05,0.5,1.56,0.2,1.59,0.5,0.5,0.93]'>
        <Emphasis>
            <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
        </Emphasis>
    </Bar>
    <Bar name='bar4' stack='one' :data='[0.38,0.98,0.19,1.09,1.56,1.11,0.49,0.26,1.59,0.6]'>
        <Emphasis>
            <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
        </Emphasis>
    </Bar>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref,onMounted } from 'vue'
    import * as echarts from 'echarts';
    import { useVueEcharts } from '@echarts-component/vue'

    const { getOption,options,onBrushselected,setOption } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value);
        onBrushselected((params)=>{
            let brushed = [];
            let brushComponent = params.batch[0];
            for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                let rawIndices = brushComponent.selected[sIdx].dataIndex;
                brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
            }
            console.log('brushed item: ' + brushed.join('\n'));
            setOption({
                title: {
                    backgroundColor: '#333',
                    text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                    bottom: 0,
                    right: '10%',
                    width: 100,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }
            })
        })
    })
</script>
<template>
    <VueEcharts style="width:100%;height:300px;position:relative;">
        <Legend :data="['bar', 'bar2', 'bar3', 'bar4']" left='10%' />
        <Brush :toolbox="['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear']" :xAxisIndex='0' />
        <Toolbox>
            <Feature prop='dataView' />
            <Feature prop='magicType' :type='["stack"]' />
        </Toolbox>
        <XAxis name='X Axis'  :data='["Class 0","Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9"]'>
            <AxisLine onZero />
            <SplitLine :show='false' />
            <SplitArea :show='false' />
        </XAxis>
        <YAxis />
        <Bar name='bar' stack='one' :data='[1.84,0.5,1.05,0.93,0.5,1.56,0.2,0.59,1.29,1.59]'>
            <Emphasis>
                <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
            </Emphasis>
        </Bar>
        <Bar name='bar2' stack='one' :data='[1.05,0.93,0.5,1.56,0.5,1.29,0.2,0.59,1.05,0.5]'>
            <Emphasis>
                <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
            </Emphasis>
        </Bar>
        <Bar name='bar3' stack='one' :data='[0.5,1.29,1.05,0.5,1.56,0.2,1.59,0.5,0.5,0.93]'>
            <Emphasis>
                <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
            </Emphasis>
        </Bar>
        <Bar name='bar4' stack='one' :data='[0.38,0.98,0.19,1.09,1.56,1.11,0.49,0.26,1.59,0.6]'>
            <Emphasis>
                <ItemStyle :shadowBlur='10' shadowColor='rgba(0,0,0,0.3)' />
            </Emphasis>
        </Bar>
    </VueEcharts>
</template>
```

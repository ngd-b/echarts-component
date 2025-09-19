# Thumbnail 缩略图组件

> [!NOTE]
> 现在仅支持用在 关系图系列（series.graph） 上。

<script setup>
    import { ref,onMounted,computed } from 'vue'
    import * as echarts from 'echarts';
    import { useVueEcharts } from '@echarts-component/vue'

    const data = ref({})
    const { getOption,options,showLoading,hideLoading } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
        showLoading();
        fetch('/npmdepgraph.json').then(res=>res.json()).then(res=>{
            hideLoading();
            data.value = res;
        })
    })
    const seriesData = computed(()=>{
        if(!data.value.nodes){
            return []
        }
        return data.value.nodes.map(function (node) {
            return {
            x: node.x,
            y: node.y,
            id: node.id,
            name: node.label,
            symbolSize: node.size,
            itemStyle: {
                color: node.color
            }
            };
        })
    })
    const edgesData = computed(()=>{
        if(!data.value.edges){
            return []
        }
        return data.value.edges.map(function (edge) {
            return {
            source: edge.sourceID,
            target: edge.targetID
            };
        })
    })
</script>

<VueEcharts style="width:100%;height:300px;" :animationDuration='1500' animationEasingUpdate='quinticInOut' >
   <Title text='NPM Dependencies' />
   <Graph layout='none' :data='seriesData' :edges='edgesData' roam roamTrigger='global'>
    <Emphasis focus='adjacency'  >
        <Text prop='label' show position='right' />
    </Emphasis>
    <LineStyle :width='0.5' :curveness='0.3' :opacity=0.7 />
   </Graph>
   <Thumbnail show width='20%' height='20%'>
    <WindowStyle color='rgba(140, 212, 250, 0.5)' borderColor='rgba(30, 64, 175, 0.7)' :opacity='1'  />
   </Thumbnail>
</VueEcharts>

## 基本用法

```vue
<script setup>
    import { ref,onMounted,computed } from 'vue'
    import * as echarts from 'echarts';
    import { useVueEcharts } from '@echarts-component/vue'

    const data = ref({})
    const { getOption,options,showLoading,hideLoading } = useVueEcharts();
    onMounted(() => {
        console.log(getOption(),options.value)
        showLoading();
        fetch('/npmdepgraph.json').then(res=>res.json()).then(res=>{
            hideLoading();
            data.value = res;
        })
    })
    const seriesData = computed(()=>{
        if(!data.value.nodes){
            return []
        }
        return data.value.nodes.map(function (node) {
            return {
            x: node.x,
            y: node.y,
            id: node.id,
            name: node.label,
            symbolSize: node.size,
            itemStyle: {
                color: node.color
            }
            };
        })
    })
    const edgesData = computed(()=>{
        if(!data.value.edges){
            return []
        }
        return data.value.edges.map(function (edge) {
            return {
            source: edge.sourceID,
            target: edge.targetID
            };
        })
    })
</script>

<template>
    <VueEcharts style="width:100%;height:300px;" :animationDuration='1500' animationEasingUpdate='quinticInOut' >
        <Title text='NPM Dependencies' />
        <Graph layout='none' :data='seriesData' :edges='edgesData' roam roamTrigger='global'>
            <Emphasis focus='adjacency'  >
                <Text prop='label' show position='right' />
            </Emphasis>
            <LineStyle :width='0.5' :curveness='0.3' :opacity=0.7 />
        </Graph>
        <Thumbnail show width='20%' height='20%'>
            <WindowStyle color='rgba(140, 212, 250, 0.5)' borderColor='rgba(30, 64, 175, 0.7)' :opacity='1'  />
        </Thumbnail>
    </VueEcharts>
</template>
```

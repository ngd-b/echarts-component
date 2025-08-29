# DataZoom 区域缩放

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts';

  const data =ref([]);

  onMounted(() => {
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (var i = 0; i < 500; i++) {
        data1.push([random(15), random(10), random(1)]);
        data2.push([random(10), random(10), random(1)]);
        data3.push([random(15), random(10), random(1)]);
    }
    data.value = [data1, data2, data3]
  })

  function random(max) {
    return (Math.random() * max).toFixed(3);
  };
  function formatSymbolSize(val){
    return val[2] * 40;
  }
</script>

<VueEcharts style="width:100%;height:300px;" :animation='false'>
    <Legend :data="['scatter', 'scatter2', 'scatter3']" />
    <Tooltip />
    <XAxis type="value" min='dataMin' max='dataMax'>
        <SplitLine show />
    </XAxis>
    <YAxis type="value" min='dataMin' max='dataMax'>
        <SplitLine show />
    </YAxis>
    <DataZoom type='slider' show :xAxisIndex='[0]' :start='1' :end='35' />
    <DataZoom type='slider' show :yAxisIndex='[0]' :start='29' :end='36' left='93%' />
    <DataZoom type='inside' show :xAxisIndex='[0]' :start='1' :end='35' />
    <DataZoom type='inside' show :yAxisIndex='[0]' :start='29' :end='36' />
    <Scatter name='scatter' :data='data[0]' :symbolSize='formatSymbolSize'>
        <ItemStyle :opacity='0.8' />
    </Scatter>
    <Scatter name='scatter' :data='data[1]' :symbolSize='formatSymbolSize'>
         <ItemStyle :opacity='0.8' />
    </Scatter>
    <Scatter name='scatter' :data='data[2]' :symbolSize='formatSymbolSize'>
         <ItemStyle :opacity='0.8' />
    </Scatter>
</VueEcharts>

## 基本用法

```vue
<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts';

  const data =ref([]);

  onMounted(() => {
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (var i = 0; i < 500; i++) {
        data1.push([random(15), random(10), random(1)]);
        data2.push([random(10), random(10), random(1)]);
        data3.push([random(15), random(10), random(1)]);
    }
    data.value = [data1, data2, data3]
  })

  function random(max) {
    return (Math.random() * max).toFixed(3);
  };
  function formatSymbolSize(val){
    return val[2] * 40;
  }
</script>
<template>
    <VueEcharts style="width:100%;height:300px;" :animation='false'>
    <Legend :data="['scatter', 'scatter2', 'scatter3']" />
      <Tooltip />
      <XAxis type="value" min='dataMin' max='dataMax'>
          <SplitLine show />
      </XAxis>
      <YAxis type="value" min='dataMin' max='dataMax'>
          <SplitLine show />
      </YAxis>
      <DataZoom type='slider' show :xAxisIndex='[0]' :start='1' :end='35' />
      <DataZoom type='slider' show :yAxisIndex='[0]' :start='29' :end='36' left='93%' />
      <DataZoom type='inside' show :xAxisIndex='[0]' :start='1' :end='35' />
      <DataZoom type='inside' show :yAxisIndex='[0]' :start='29' :end='36' />
      <Scatter name='scatter' :data='data[0]' :symbolSize='formatSymbolSize'>
          <ItemStyle :opacity='0.8' />
      </Scatter>
      <Scatter name='scatter' :data='data[1]' :symbolSize='formatSymbolSize'>
          <ItemStyle :opacity='0.8' />
      </Scatter>
      <Scatter name='scatter' :data='data[2]' :symbolSize='formatSymbolSize'>
          <ItemStyle :opacity='0.8' />
      </Scatter>
  </VueEcharts>
</template>
```

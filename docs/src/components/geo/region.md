# Region 区域样式

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

  const isReady = ref(false);
  const { getOption,options,showLoading,hideLoading } = useVueEcharts();

  const nameMap = {
    'Central and Western': '中西区',
    Eastern: '东区',
    Islands: '离岛',
    'Kowloon City': '九龙城',
    'Kwai Tsing': '葵青',
    'Kwun Tong': '观塘',
    North: '北区',
    'Sai Kung': '西贡',
    'Sha Tin': '沙田',
    'Sham Shui Po': '深水埗',
    Southern: '南区',
    'Tai Po': '大埔',
    'Tsuen Wan': '荃湾',
    'Tuen Mun': '屯门',
    'Wan Chai': '湾仔',
    'Wong Tai Sin': '黄大仙',
    'Yau Tsim Mong': '油尖旺',
    'Yuen Long': '元朗'
  }
  onMounted(() => {
    console.log(getOption(),options.value)
    showLoading();

    fetch('/hk.json').then(res=>res.json()).then(res=>{
      hideLoading();
      echarts.registerMap('HK', {geoJSON: res});
      isReady.value=true;
    })
  })
</script>

## 基本用法

<VueEcharts style="width:100%;height:300px;">
  <template v-if='isReady'>
    <Map :aspectScale='1' :geoIndex='0' />
    <Geo map="HK" roam :aspectScale='1' :nameMap='nameMap' >
      <Text prop='label' show />
      <Emphasis>
          <Text prop='label' show color='#fff' />
      </Emphasis>
      <Region name='东区'>
        <ItemStyle areaColor='#FFEC8B' :borderWidth='1' borderColor='#FFD700' />
        <Emphasis>
          <ItemStyle areaColor='#FFD700' />
        </Emphasis>
      </Region>
      <Region name='南区'>
        <ItemStyle areaColor='#ADD8E6' />
      </Region>
      <Region name='油尖旺'>
        <ItemStyle areaColor='#90EE90' />
      </Region>
    </Geo>
  </template>
</VueEcharts>

```vue
<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

  const isReady = ref(false);
  const { getOption,options,showLoading,hideLoading } = useVueEcharts();

  const nameMap = {
    'Central and Western': '中西区',
    Eastern: '东区',
    Islands: '离岛',
    'Kowloon City': '九龙城',
    'Kwai Tsing': '葵青',
    'Kwun Tong': '观塘',
    North: '北区',
    'Sai Kung': '西贡',
    'Sha Tin': '沙田',
    'Sham Shui Po': '深水埗',
    Southern: '南区',
    'Tai Po': '大埔',
    'Tsuen Wan': '荃湾',
    'Tuen Mun': '屯门',
    'Wan Chai': '湾仔',
    'Wong Tai Sin': '黄大仙',
    'Yau Tsim Mong': '油尖旺',
    'Yuen Long': '元朗'
  }

  onMounted(() => {
    console.log(getOption(),options.value)
    showLoading();

    fetch('/hk.json').then(res=>res.json()).then(res=>{
      hideLoading();
      echarts.registerMap('HK', {geoJSON: res});
      isReady.value=true;
    })
  })
</script>
<template>
    <VueEcharts style="width:100%;height:300px;">
      <template v-if='isReady'>
        <Map :aspectScale='1' :geoIndex='0' />
        <Geo map="HK" roam :aspectScale='1' :nameMap='nameMap' >
          <Text prop='label' show />
          <Emphasis>
              <Text prop='label' show color='#fff' />
          </Emphasis>
          <Region name='东区'>
            <ItemStyle areaColor='#FFEC8B' :borderWidth='1' borderColor='#FFD700' />
            <Emphasis>
              <ItemStyle areaColor='#FFD700' />
            </Emphasis>
          </Region>
          <Region name='南区'>
            <ItemStyle areaColor='#ADD8E6' />
          </Region>
          <Region name='油尖旺'>
            <ItemStyle areaColor='#90EE90' />
          </Region>
        </Geo>
      </template>
    </VueEcharts>
</template>
```

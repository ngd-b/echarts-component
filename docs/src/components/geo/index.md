# Geo 地理坐标系组件

<script setup>
  import { ref,onMounted } from 'vue'
  import * as echarts from 'echarts';
  import { useVueEcharts } from '@echarts-component/vue'

  const isReady = ref(false);
  const { getOption,options,showLoading,hideLoading } = useVueEcharts();

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
        <Geo map="HK" roam :aspectScale='1'>
            <Emphasis>
                <Text prop='label' show color='#fff' />
            </Emphasis>
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
            <Geo map="HK" roam :aspectScale='1'>
                <Emphasis>
                    <Text prop='label' show color='#fff' />
                </Emphasis>
            </Geo>
        </template>
    </VueEcharts>
</template>
```

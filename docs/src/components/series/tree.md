# Tree 树图

<script setup>
  import { ref } from 'vue'

  const data = ref([{
      name: "root",
      children: [{
        name: "Child A",
        children: [{
          name: "Leaf C"
        }, {
          name: "Leaf D"
        }, {
          name: "Leaf E"
        }, {
          name: "Leaf F"
        }]
      }, {
        name: "Child B",
        children: [{
          name: "Leaf G"
        }, {
          name: "Leaf H"
        }]
      }, {
        name: "Child D"
      }, {
        name: "Child F",
        children: [{
          name: "Leaf J"
        }, {
          name: "Leaf K"
        }]
      }]
    }])
</script>

## 基本用法

```vue
<script setup>
  import { ref } from 'vue'

  const data = ref([{
      name: "root",
      children: [{
        name: "Child A",
        children: [{
          name: "Leaf C"
        }, {
          name: "Leaf D"
        }, {
          name: "Leaf E"
        }, {
          name: "Leaf F"
        }]
      }, {
        name: "Child B",
        children: [{
          name: "Leaf G"
        }, {
          name: "Leaf H"
        }]
      }, {
        name: "Child D"
      }, {
        name: "Child F",
        children: [{
          name: "Leaf J"
        }, {
          name: "Leaf K"
        }]
      }]
    }])
</script>
<template>
  <VueEcharts style="width:100%;height:300px;">
    <Tree :data="data" />
    <Title text="数据关系" />
  </VueEcharts>
</template>

```

<VueEcharts style="width:100%;height:300px;">
    <Tree :data="data"  />
    <Title text="数据关系" />
</VueEcharts>

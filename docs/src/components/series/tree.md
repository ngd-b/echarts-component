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

<VueEcharts style="width:100%;height:300px;">
    <Tree :data="data">
      <Text prop='label' position="right" />
    </Tree>
</VueEcharts>

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
    <Tree :data="data">
      <Text prop='label' position="right" />
    </Tree>
  </VueEcharts>
</template>

```


# 如何触发图标的事件

在`echarts`中，我们通过`dispatchAction`来指定触发事件。为了更符合现代web开发的模式，提供函数式调用的方式来触发，这样可以有更好的ts类型支持。

> [!TIP]
> 所有的方法名都与事件名相同，无心智负担。

```ts
import { ref,onMounted } from 'vue'
import { useActions } from '@echarts-component/vue'

const { highlight } = useActions();

onMounted(()=>{ 
    // 保证图标已经初始化完
    highlight({
        seriesIndex:0,
        dataIndex:2
    })
})

```

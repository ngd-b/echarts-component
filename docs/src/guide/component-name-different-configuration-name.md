
# 部分组件名和配置名不同说明

为了避免导出的组件命名冲突，部分组件的命名按照其功能重新命名。

> 对于混合JSON 配置项不受此影响。

## `radar` 雷达图坐标系组件

为了区分`series`中的`Radar`数据项配置组件，将坐标系`Radar`命名为`RadarAxis`组件。

## `parallel` 平行坐标系

为了区分`series`中的`Parallel`数据项配置组件，将坐标系`Parallel`命名为`ParallelAxis`组件，原来的平行坐标轴的配置项`parallelAxis` 将作为`ParallelAxis`组件的配置项`data`进行配置。

## `parallelAxis` 平行坐标轴

配置项`parallelAxis` 不提供组件，它作为平行坐标系`parallel`的属性`data`进行配置。平行坐标系`parallel`的组件名称为`ParallelAxis`.

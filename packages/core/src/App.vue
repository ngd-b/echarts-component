<template>
  <h2>vue-echarts</h2>

  <div class="flex flex-wrap gap-20px">
    <VueEcharts style="width: 100%; height: 300px; position: relative">
      <Legend :data="['Altitude (km) vs Temperature (°C)']" />
      <Tooltip trigger="axis" formatter="Temperature : <br/>{b}km : {c}°C" />
      <Grid left="3%" right="4%" bottom="3%" containLabel />
      <XAxis type="value">
        <Text prop="axisLabel" formatter="{value}°C" />
      </XAxis>
      <YAxis
        type="category"
        boundaryGap
        :data="['0', '10', '20', '30', '40', '50', '60', '70', '80']"
      >
        <AxisLine :onZero="false" />
        <Text prop="axisLabel" formatter="{value} km" />
      </YAxis>
      <Graphic>
        <RenderGroup
          :rotation="Math.PI / 4"
          bounding="raw"
          :right="110"
          :bottom="110"
          :z="100"
        >
          <RenderRect left="center" top="middle" :z="100">
            <Shape :width="240" :height="50" />
            <ShapeStyle fill="rgba(0,0,0,0.3)" />
          </RenderRect>
          <RenderText left="center" top="center" :z="100">
            <ShapeStyle
              fill="#fff"
              text="ECHARTS LINE CHART"
              font="bold 26px sans-serif"
            />
          </RenderText>
        </RenderGroup>
        <RenderGroup left="10%" top="center">
          <RenderRect left="center" top="middle" :z="100">
            <Shape :width="240" :height="90" />
            <ShapeStyle
              fill="#fff"
              stroke="#555"
              :lineWidth="1"
              :shadowBlur="8"
              :shadowOffsetX="3"
              :shadowOffsetY="3"
              shadowColor="rgba(0,0,0,0.2)"
            />
          </RenderRect>
          <RenderText left="center" top="center" :z="100">
            <ShapeStyle
              fill="#333"
              :width="200"
              overflow="break"
              text="xAxis represents temperature in °C, yAxis represents altitude in km, An image watermark in the upper right, This text block can be placed in any place"
              font="14px Microsoft YaHe"
            />
          </RenderText>
        </RenderGroup>
      </Graphic>
      <Line
        name="高度(km)与气温(°C)变化关系"
        smooth
        :data="[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]"
      />
    </VueEcharts>
  </div>
</template>
<script setup lang="tsx">
import { onMounted, ref } from "vue";
import {
  VueEcharts,
  Line,
  XAxis,
  YAxis,
  Grid,
  Title,
  Bar,
  Pie,
  Legend,
  Tooltip,
  Text,
  AxisLine,
  LineStyle,
  AxisTick,
  MinorTick,
  SplitLine,
  SplitArea,
  AreaStyle,
  MinorSplitLine,
  VisualMap,
  Dataset,
  DataZoom,
} from "./components";
import { useVueEcharts } from "./hooks";

let data = ref([]);
const {
  setOption,
  actions,
  vueEchartsRef,
  getWidth,
  getOption,
  clear,
  onClick,
  onFinished,
  options,
} = useVueEcharts()!;
onMounted(() => {
  setTimeout(() => {
    // data.value = [100, 539, 118, 267, 126, 335, 444, 563, 1282, 22];

    // console.log(vueEchartsRef);
    actions.highlight({ dataIndex: 0 });
    actions.select({ seriesIndex: 0 });

    console.log(getWidth(), getOption(), options.value);
  }, 3 * 1000);

  onClick((event) => {
    console.log("点击了", event);
  });
  onFinished(() => {
    console.log("绘制完成");
  });
});
</script>

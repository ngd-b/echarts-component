import VueEcharts from "./container/index.vue";

export { VueEcharts };

// components
import XAxis from "./xAxis/index.vue";
import YAxis from "./yAxis/index.vue";
import Grid from "./grid/index.vue";
import Title from "./title/index.vue";
import Legend from "./legend/index.vue";
import Tooltip from "./tooltip/index.vue";
import Polar from "./polar/index.vue";
import RadarAxis from "./radar/index.vue";
import RadiusAxis from "./radiusAxis/index.vue";
import AngleAxis from "./angleAxis/index.vue";
import {
  DataBackground,
  DataZoom,
  HandleStyle,
  MoveHandleStyle,
  BrushStyle,
} from "./dataZoom/index";
import VisualMap from "./visualMap/index.vue";
import AxisPointer from "./axisPointer/index.vue";
import Toolbox from "./toolbox/index.vue";
import Brush from "./brush/index.vue";
import { Geo, Region } from "./geo/index";
import ParallelAxis from "./parallel/index.vue";
import ParallelAxisDefault from "./parallel/parallelAxisDefault.vue";
import SingleAxis from "./singleAxis/index.vue";
import Timeline from "./timeline/index.vue";
import Calendar from "./calendar/index.vue";
import Dataset from "./dataset/index.vue";

//
import Handle from "./axisPointer/handle.vue";
import Feature from "./toolbox/feature.vue";
import Transfrom from "./dataset/transfrom.vue";

export {
  XAxis,
  YAxis,
  Grid,
  Title,
  Legend,
  Tooltip,
  Polar,
  RadarAxis,
  RadiusAxis,
  AngleAxis,
  DataZoom,
  VisualMap,
  AxisPointer,
  Toolbox,
  Brush,
  Geo,
  ParallelAxis,
  ParallelAxisDefault,
  SingleAxis,
  Timeline,
  Calendar,
  Dataset,
};

export {
  Handle,
  Feature,
  Transfrom,
  DataBackground,
  HandleStyle,
  MoveHandleStyle,
  BrushStyle,
  Region,
};
// children components
export * from "./common/index";
// series type
export * from "./series";

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

import Brush from "./brush/index.vue";
import SingleAxis from "./singleAxis/index.vue";
import Calendar from "./calendar/index.vue";

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
  Brush,
  SingleAxis,
  Calendar,
};
export * from "./dataZoom/index";
export * from "./axisPointer/index";
export * from "./toolbox/index";
export * from "./geo/index";
export * from "./timeline/index";
export * from "./dataset/index";
export * from "./visualMap/index";
export * from "./parallel/index";
export * from "./matrix/index";

// children components
export * from "./common/index";
// series type
export * from "./series";

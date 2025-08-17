import VueEcharts from "./container/index.vue";

export { VueEcharts };

// components
import XAxis from "./xAxis/index.vue";
import YAxis from "./yAxis/index.vue";
import Grid from "./grid/index.vue";
import Title from "./title/index.vue";
import Legend from "./legend/index.vue";
import Tooltip from "./tooltip/index.vue";
import PolarAxis from "./polar/index.vue";
import RadarAxis from "./radar/index.vue";
import RadiusAxis from "./radiusAxis/index.vue";
import AngleAxis from "./angleAxis/index.vue";
import DataZoom from "./dataZoom/index.vue";
import VisualMap from "./visualMap/index.vue";

export {
  XAxis,
  YAxis,
  Grid,
  Title,
  Legend,
  Tooltip,
  PolarAxis,
  RadarAxis,
  RadiusAxis,
  AngleAxis,
  DataZoom,
  VisualMap,
};

// children components
export * from "./common/index";
// series type
export * from "./series";

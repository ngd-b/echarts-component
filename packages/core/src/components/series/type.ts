import type { LineSeriesOption } from "./line/type";
import type { BarSeriesOption } from "./bar/type";
import type { PieSeriesOption } from "./pie/type";
import type { ScatterSeriesOption } from "./scatter/type";
import type { EffectScatterSeriesOption } from "./effectScatter/type";
import type { RadarSeriesOption } from "./radar/type";
import type { TreeSeriesOption } from "./tree/type";
import type { TreemapSeriesOption } from "./treemap/type";
import type { SunburstSeriesOption } from "./sunburst/type";
import type { BoxplotSeriesOption } from "./boxplot/type";
import type { CandlestickSeriesOption } from "./candlestick/type";
import type { HeatmapSeriesOption } from "./heatmap/type";
import type { MapSeriesOption } from "./map/type";
import type { ParallelSeriesOption } from "./parallel/type";
import type { LinesSeriesOption } from "./lines/type";
import type { GraphSeriesOption } from "./graph/type";
import type { SankeySeriesOption } from "./sankey/type";
import type { FunnelSeriesOption } from "./funnel/type";
import type { GaugeSeriesOption } from "./gauge/type";
import type { PictorialBarSeriesOption } from "./pictorialBar/type";
import type { ThemeRiverSeriesOption } from "./themeRiver/type";
import type { CustomSeriesOption } from "./custom/type";
// 自定义系列其他组件类型
export type * from "./custom/type";
//
export type * from "./components/type";

export type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
  EffectScatterSeriesOption,
  RadarSeriesOption,
  MapSeriesOption,
  TreeSeriesOption,
  GraphSeriesOption,
  SunburstSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  HeatmapSeriesOption,
  LinesSeriesOption,
  SankeySeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  PictorialBarSeriesOption,
  ThemeRiverSeriesOption,
  TreemapSeriesOption,
  ParallelSeriesOption,
  CustomSeriesOption,
};

export type SeriesOption =
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | EffectScatterSeriesOption
  | RadarSeriesOption
  | MapSeriesOption
  | TreeSeriesOption
  | GraphSeriesOption
  | SunburstSeriesOption
  | BoxplotSeriesOption
  | CandlestickSeriesOption
  | HeatmapSeriesOption
  | LinesSeriesOption
  | SankeySeriesOption
  | FunnelSeriesOption
  | GaugeSeriesOption
  | PictorialBarSeriesOption
  | ThemeRiverSeriesOption
  | TreemapSeriesOption
  | ParallelSeriesOption
  | CustomSeriesOption;

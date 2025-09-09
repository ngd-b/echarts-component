import type { EChartsOption } from "./container/type";
import type {
  PieSeries,
  PieSeriesOption,
  LineSeries,
  LineSeriesOption,
  BarSeries,
  BarSeriesOption,
  BoxplotSeries,
  BoxplotSeriesOption,
  CandlestickSeries,
  CandlestickSeriesOption,
  EffectScatterSeries,
  EffectScatterSeriesOption,
  FunnelSeries,
  FunnelSeriesOption,
  GaugeSeries,
  GaugeSeriesOption,
  GraphSeries,
  GraphSeriesOption,
  HeatmapSeries,
  HeatmapSeriesOption,
  LinesSeries,
  LinesSeriesOption,
  MapSeries,
  MapSeriesOption,
  ParallelSeries,
  ParallelSeriesOption,
  PictorialBarSeries,
  PictorialBarSeriesOption,
  RadarSeries,
  RadarSeriesOption,
  SankeySeries,
  SankeySeriesOption,
  ScatterSeries,
  ScatterSeriesOption,
  SunburstSeries,
  SunburstSeriesOption,
  ThemeRiverSeries,
  ThemeRiverSeriesOption,
  TreeSeries,
  TreeSeriesOption,
  TreemapSeries,
  TreemapSeriesOption,
} from "./series/type";
import type { XAXisComponentOption, XAXisOption } from "./xAxis/type";
import type { YAXisComponentOption, YAXisOption } from "./yAxis/type";
import type { PolarComponentOption, PolarOption } from "./polar/type";
import type { RadarComponentOption, RadarOption } from "./radar/type";
import type { GridComponentOption, GridOptions } from "./grid/type";
import type { TooltipComponentOption, TooltipOptions } from "./tooltip/type";
import type { TitleComponentOption, TitleOptions } from "./title/type";
import type { LegendComponentOption, LegendOptions } from "./legend/type";
import type {
  RadiusAxisComponentOption,
  RadiusAxisOption,
} from "./radiusAxis/type";
import type {
  AngleAxisComponentOption,
  AngleAxisOption,
} from "./angleAxis/type";
import type {
  DataZoomComponentOption,
  DataZoomOption,
  DataBackgroundComponentOption,
} from "./dataZoom/type";
import type {
  VisualMapComponentOption,
  VisualMapOption,
} from "./visualMap/type";
import type {
  AxisPointerComponentOption,
  AxisPointerOption,
  HandleStyleOption,
} from "./axisPointer/type";
import type {
  ToolboxComponentOption,
  ToolboxOption,
  FeatureOption,
} from "./toolbox/type";
import type { BrushComponentOption, BrushOption } from "./brush/type";
import type {
  GeoComponentOption,
  GeoOption,
  GeoRegionComponentOption,
} from "./geo/type";
import type {
  ParallelComponentOption,
  ParallelOption,
  ParallelAxisOption,
  ParallelAxisComponentOption,
} from "./parallel/type";
import type {
  SingleAxisComponentOption,
  SingleAxisOption,
} from "./singleAxis/type";
import type { TimelineComponentOption, TimelineOption } from "./timeline/type";
import type { CalendarComponentOption, CalendarOption } from "./calendar/type";
import type {
  DatasetComponentOption,
  DatasetOption,
  DatasetTransformOption,
} from "./dataset/type";

import type {
  TextOptions,
  AxisOption,
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  IcontyleOption,
  ShadowStyleOption,
  MarkPointComponentOption,
  MarkLineComponentOption,
  MarkAreaComponentOption,
  EmphasisComponentOption,
  SelectComponentOption,
  BlurComponentOption,
} from "./common/type";

export { EChartsOption };
export {
  PieSeries,
  LineSeries,
  BarSeries,
  PieSeriesOption,
  LineSeriesOption,
  BarSeriesOption,
  BoxplotSeries,
  BoxplotSeriesOption,
  CandlestickSeries,
  CandlestickSeriesOption,
  EffectScatterSeries,
  EffectScatterSeriesOption,
  FunnelSeries,
  FunnelSeriesOption,
  GaugeSeries,
  GaugeSeriesOption,
  GraphSeries,
  GraphSeriesOption,
  HeatmapSeries,
  HeatmapSeriesOption,
  LinesSeries,
  LinesSeriesOption,
  MapSeries,
  MapSeriesOption,
  ParallelSeries,
  ParallelSeriesOption,
  PictorialBarSeries,
  PictorialBarSeriesOption,
  RadarSeries,
  RadarSeriesOption,
  SankeySeries,
  SankeySeriesOption,
  ScatterSeries,
  ScatterSeriesOption,
  SunburstSeries,
  SunburstSeriesOption,
  ThemeRiverSeries,
  ThemeRiverSeriesOption,
  TreeSeries,
  TreeSeriesOption,
  TreemapSeries,
  TreemapSeriesOption,
};
export {
  XAXisComponentOption,
  YAXisComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  RadiusAxisComponentOption,
  AngleAxisComponentOption,
  ParallelComponentOption,
  ParallelAxisComponentOption,
  SingleAxisComponentOption,
};
export {
  DataZoomComponentOption,
  VisualMapComponentOption,
  GridComponentOption,
  TooltipComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  ToolboxComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  GeoComponentOption,
  TimelineComponentOption,
  CalendarComponentOption,
  DatasetComponentOption,
};

export {
  DatasetOption,
  CalendarOption,
  TimelineOption,
  SingleAxisOption,
  ParallelOption,
  ParallelAxisOption,
  GeoOption,
  BrushOption,
  ToolboxOption,
  AxisPointerOption,
  VisualMapOption,
  DataZoomOption,
  AngleAxisOption,
  RadiusAxisOption,
  TitleOptions,
  TooltipOptions,
  GridOptions,
  LegendOptions,
  RadarOption,
  PolarOption,
  YAXisOption,
  XAXisOption,
};

export {
  TextOptions,
  AxisOption,
  LineStyleOption,
  AreaStyleOption,
  ItemStyleOption,
  IcontyleOption,
  ShadowStyleOption,
  HandleStyleOption,
  FeatureOption,
  MarkPointComponentOption,
  MarkLineComponentOption,
  MarkAreaComponentOption,
  EmphasisComponentOption,
  SelectComponentOption,
  BlurComponentOption,
  DatasetTransformOption,
  DataBackgroundComponentOption,
  GeoRegionComponentOption,
};

export type SeriesOption =
  | PieSeriesOption
  | LineSeriesOption
  | BarSeriesOption
  | BoxplotSeriesOption
  | CandlestickSeriesOption
  | EffectScatterSeriesOption
  | FunnelSeriesOption
  | GaugeSeriesOption
  | GraphSeriesOption
  | HeatmapSeriesOption
  | LinesSeriesOption
  | MapSeriesOption
  | ParallelSeriesOption
  | PictorialBarSeriesOption
  | RadarSeriesOption
  | SankeySeriesOption
  | ScatterSeriesOption
  | SunburstSeriesOption
  | ThemeRiverSeriesOption
  | TreeSeriesOption
  | TreemapSeriesOption;

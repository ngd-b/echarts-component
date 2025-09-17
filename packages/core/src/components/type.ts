import type { EChartsOption } from "./container/type";

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
import type {
  TimelineComponentOption,
  TimelineOption,
  CheckpointStyleComponentOption,
  ControlStyleComponentOption,
  ProgressComponentOption,
} from "./timeline/type";
import type { CalendarComponentOption, CalendarOption } from "./calendar/type";
import type {
  DatasetComponentOption,
  DatasetOption,
  DatasetTransformOption,
} from "./dataset/type";

export type * from "./common/type";

export type * from "./series/type";

export { EChartsOption };

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
  HandleStyleOption,
  FeatureOption,
  DatasetTransformOption,
  DataBackgroundComponentOption,
  GeoRegionComponentOption,
  CheckpointStyleComponentOption,
  ControlStyleComponentOption,
  ProgressComponentOption,
};

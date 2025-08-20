import type {
  SeriesOption,
  XAXisComponentOption,
  YAXisComponentOption,
  RadarComponentOption,
  RadiusAxisComponentOption,
  AngleAxisComponentOption,
  AxisPointerComponentOption,
  SingleAxisComponentOption,
  PolarComponentOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
  DataZoomComponentOption,
  VisualMapComponentOption,
  ToolboxComponentOption,
  BrushComponentOption,
  GeoComponentOption,
  ParallelComponentOption,
  TimelineComponentOption,
  CalendarComponentOption,
  DatasetComponentOption,
  ChartOptions,
} from "../components/type";
import { Actions } from "./actions";
import { ShallowReactive, ShallowRef } from "vue";
import { Methods } from "./methods";
import { EventHooks } from "./events";

export type UpdateOption =
  | SeriesOption
  | XAXisComponentOption
  | YAXisComponentOption
  | GridComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | RadarComponentOption
  | RadiusAxisComponentOption
  | AngleAxisComponentOption
  | DataZoomComponentOption
  | AxisPointerComponentOption
  | ToolboxComponentOption
  | BrushComponentOption
  | GeoComponentOption
  | ParallelComponentOption
  | SingleAxisComponentOption
  | TimelineComponentOption
  | CalendarComponentOption
  | PolarComponentOption;

export interface EchartsState {
  vueEchartsRef: ShallowRef<echarts.ECharts | null>;
}
export interface EchartsContext extends EchartsState, Methods, EventHooks {
  readonly id: string;
  update: <K extends MainType>(type: K, data: MainTypeMap[K]) => void;
  actions: ShallowReactive<Actions>;
}

export type EchartsOptions = ChartOptions & {
  series?: SeriesOption[];
  xAxis?: XAXisComponentOption[];
  yAxis?: YAXisComponentOption[];
  grid?: GridComponentOption[];
  title?: TitleComponentOption[];
  legend?: LegendComponentOption[];
  tooltip?: TooltipComponentOption[];
  polar?: PolarComponentOption[];
  radar?: RadarComponentOption[];
  radiusAxis?: RadiusAxisComponentOption[];
  angleAxis?: AngleAxisComponentOption[];
  dataZoom?: DataZoomComponentOption[];
  visualMap?: VisualMapComponentOption[];
  axisPointer?: AxisPointerComponentOption[];
  toolbox?: ToolboxComponentOption[];
  brush?: BrushComponentOption[];
  geo?: GeoComponentOption[];
  parallel?: ParallelComponentOption[];
  singleAxis?: SingleAxisComponentOption[];
  timeline?: TimelineComponentOption[];
  calendar?: CalendarComponentOption[];
  dataset?: DatasetComponentOption[];
};

export type MainType =
  | "series"
  | "xAxis"
  | "yAxis"
  | "grid"
  | "title"
  | "legend"
  | "tooltip"
  | "polar"
  | "radar"
  | "radiusAxis"
  | "angleAxis"
  | "dataZoom"
  | "visualMap"
  | "axisPointer"
  | "toolbox"
  | "brush"
  | "geo"
  | "parallel"
  | "singleAxis"
  | "timeline"
  | "calendar"
  | "dataset";

export type MainTypeMap = {
  series: SeriesOption;
  xAxis: XAXisComponentOption;
  yAxis: YAXisComponentOption;
  grid: GridComponentOption;
  title: TitleComponentOption;
  legend: LegendComponentOption;
  tooltip: TooltipComponentOption;
  polar: PolarComponentOption;
  radar: RadarComponentOption;
  radiusAxis: RadiusAxisComponentOption;
  angleAxis: AngleAxisComponentOption;
  dataZoom: DataZoomComponentOption;
  visualMap: VisualMapComponentOption;
  axisPointer: AxisPointerComponentOption;
  toolbox: ToolboxComponentOption;
  brush: BrushComponentOption;
  geo: GeoComponentOption;
  parallel: ParallelComponentOption;
  singleAxis: SingleAxisComponentOption;
  timeline: TimelineComponentOption;
  calendar: CalendarComponentOption;
  dataset: DatasetComponentOption;
};

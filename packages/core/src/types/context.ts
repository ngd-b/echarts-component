import type {
  SeriesOption,
  XAXisOption,
  YAXisOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
  PolarOption,
  ChartOptions,
  RadarOption,
  RadiusAxisOption,
  AngleAxisOption,
  DataZoomComponentOption,
  VisualMapComponentOption,
  AxisPointerOption,
  ToolboxComponentOption,
  BrushComponentOption,
  GeoComponentOption,
  ParallelComponentOption,
} from "../components/type";
import { Actions } from "./actions";
import { ShallowReactive, ShallowRef } from "vue";
import { Methods } from "./methods";
import { EventHooks } from "./events";

export type UpdateOption =
  | SeriesOption
  | XAXisOption
  | YAXisOption
  | GridComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | RadarOption
  | RadiusAxisOption
  | AngleAxisOption
  | DataZoomComponentOption
  | AxisPointerOption
  | ToolboxComponentOption
  | BrushComponentOption
  | GeoComponentOption
  | ParallelComponentOption;

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
  xAxis?: XAXisOption[];
  yAxis?: YAXisOption[];
  grid?: GridComponentOption[];
  title?: TitleComponentOption[];
  legend?: LegendComponentOption[];
  tooltip?: TooltipComponentOption[];
  polar?: PolarOption[];
  radar?: RadarOption[];
  radiusAxis?: RadiusAxisOption[];
  angleAxis?: AngleAxisOption[];
  dataZoom?: DataZoomComponentOption[];
  visualMap?: VisualMapComponentOption[];
  axisPointer?: AxisPointerOption[];
  toolbox?: ToolboxComponentOption[];
  brush?: BrushComponentOption[];
  geo?: GeoComponentOption[];
  parallel?: ParallelComponentOption[];
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
  | "parallel";

export type MainTypeMap = {
  series: SeriesOption;
  xAxis: XAXisOption;
  yAxis: YAXisOption;
  grid: GridComponentOption;
  title: TitleComponentOption;
  legend: LegendComponentOption;
  tooltip: TooltipComponentOption;
  polar: PolarOption;
  radar: RadarOption;
  radiusAxis: RadiusAxisOption;
  angleAxis: AngleAxisOption;
  dataZoom: DataZoomComponentOption;
  visualMap: VisualMapComponentOption;
  axisPointer: AxisPointerOption;
  toolbox: ToolboxComponentOption;
  brush: BrushComponentOption;
  geo: GeoComponentOption;
  parallel: ParallelComponentOption;
};

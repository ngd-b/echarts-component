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
  | TooltipComponentOption;

export interface EchartsState {
  vueEchartsRef: ShallowRef<echarts.ECharts | null>;
}
export interface EchartsContext extends EchartsState, Methods, EventHooks {
  readonly id: string;
  updateSeries: (data: SeriesOption) => void;
  updateXAxis: (data: XAXisOption) => void;
  updateYAxis: (data: YAXisOption) => void;
  updateGrid: (data: GridComponentOption) => void;
  updateTitle: (data: TitleComponentOption) => void;
  updateLegend: (data: LegendComponentOption) => void;
  updateTooltip: (data: TooltipComponentOption) => void;
  updatePolar: (data: PolarOption) => void;
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
};

export type MainType =
  | "series"
  | "xAxis"
  | "yAxis"
  | "grid"
  | "title"
  | "legend"
  | "tooltip"
  | "polar";

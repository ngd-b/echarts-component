import {
  ECBasicOption,
  ResizeOpts,
  SetOptionOpts,
} from "echarts/types/dist/shared";
import type {
  SeriesOption,
  XAXisOption,
  YAXisOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
  ChartOptions,
} from "../components/type";
import { Actions } from "./actions";
import { ShallowRef } from "vue";

export type UpdateOption =
  | SeriesOption
  | XAXisOption
  | YAXisOption
  | GridComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption;

export interface EchartsContext {
  readonly id: string;
  vueEchartsRef: ShallowRef<echarts.ECharts | null>;
  // getInstance: () => echarts.ECharts | null;
  setOption: {
    (option: ECBasicOption, notMerge?: boolean, lazyUpdate?: boolean): void;
    (option: ECBasicOption, opts?: SetOptionOpts): void;
  };
  getWidth?: () => number;
  getHeight?: () => number;
  getOption?: () => ECBasicOption;
  resize?: (opts?: ResizeOpts) => void;
  updateSeries: (data: SeriesOption) => void;
  updateXAxis: (data: XAXisOption) => void;
  updateYAxis: (data: YAXisOption) => void;
  updateGrid: (data: GridComponentOption) => void;
  updateTitle: (data: TitleComponentOption) => void;
  updateLegend: (data: LegendComponentOption) => void;
  updateTooltip: (data: TooltipComponentOption) => void;
  actions: Actions;
}

export type EchartsOptions = ChartOptions & {
  series?: SeriesOption[];
  xAxis?: XAXisOption[];
  yAxis?: YAXisOption[];
  grid?: GridComponentOption[];
  title?: TitleComponentOption[];
  legend?: LegendComponentOption[];
  tooltip?: TooltipComponentOption[];
};

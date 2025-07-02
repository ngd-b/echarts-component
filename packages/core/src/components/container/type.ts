import type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
} from "echarts/charts";
import type { ComposeOption } from "echarts/core";
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
} from "echarts/components";
import type { XAXisOption, YAXisOption } from "echarts/types/dist/shared";

export type SeriesOption = LineSeriesOption | BarSeriesOption | PieSeriesOption;

export type ChartOptions = ComposeOption<
  | SeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
>;

export interface Actions {
  updateSeries: (data: SeriesOption) => void;
  updateXAxis: (data: XAXisOption) => void;
  updateYAxis: (data: YAXisOption) => void;
}

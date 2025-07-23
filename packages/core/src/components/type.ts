import type {
  ChartOptions,
  SeriesOption,
  SeriesConfig,
} from "./container/type";
import type {
  PieSeries,
  PieSeriesOption,
  LineSeries,
  LineSeriesOption,
  BarSeries,
  BarSeriesOption,
} from "./series/type";
import type { XAXisOption, XAxis } from "./xAxis/type";
import type { YAXisOption, YAxis } from "./yAxis/type";
import type { GridComponentOption, GridOptions } from "./grid/type";
import type { TooltipComponentOption, TooltipOptions } from "./tooltip/type";
import type { TitleComponentOption, TitleOptions } from "./title/type";
import type {
  TextOptions,
  AxisOption,
  LineStyleOption,
  AreaStyleOption,
  ZRColor,
} from "./common/type";
import type { LegendComponentOption, LegendOptions } from "./legend/type";

export { ChartOptions, SeriesOption, SeriesConfig };
export {
  PieSeries,
  LineSeries,
  BarSeries,
  PieSeriesOption,
  LineSeriesOption,
  BarSeriesOption,
};
export { XAxis, XAXisOption, YAXisOption, YAxis };
export {
  GridComponentOption,
  GridOptions,
  TooltipComponentOption,
  TooltipOptions,
  TitleComponentOption,
  TitleOptions,
  LegendComponentOption,
  LegendOptions,
};

export { TextOptions, AxisOption, LineStyleOption, AreaStyleOption };
export type { ZRColor };

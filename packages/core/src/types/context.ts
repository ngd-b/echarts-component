import type {
  SeriesOption,
  XAXisOption,
  YAXisOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
} from "../components/type";

export interface EchartsContext {
  echartRef: echarts.ECharts | null;
  updateSeries: (data: SeriesOption) => void;
  updateXAxis: (data: XAXisOption) => void;
  updateYAxis: (data: YAXisOption) => void;
  updateGrid: (data: GridComponentOption) => void;
  updateTitle: (data: TitleComponentOption) => void;
  updateLegend: (data: LegendComponentOption) => void;
}

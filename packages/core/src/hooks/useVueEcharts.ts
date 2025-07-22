import { inject, provide, Ref } from "vue";
import type { EchartsContext, EchartsOptions } from "../types";
import type {
  GridComponentOption,
  LegendComponentOption,
  SeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
  XAXisOption,
  YAXisOption,
} from "../components/type";

export const ECHARTS_CONTEXT_KEY = Symbol("vue-echarts");
interface UseVueEchartsOptions {
  options: Ref<EchartsOptions>;
}
export function useVueEcharts(
  config?: Partial<UseVueEchartsOptions>
): EchartsContext | null {
  if (!config) {
    return inject<EchartsContext>(ECHARTS_CONTEXT_KEY) ?? null;
  }

  const { options } = config;

  if (!options) {
    throw new Error(
      "[Vue Echarts]: useVueEcharts() requires options and update function."
    );
  }
  const updateSeries = (seriesData: SeriesOption) => {
    if (options.value.series === undefined) {
      options.value.series = [];
    }
    let index = options.value.series.findIndex(
      (item: SeriesOption) => item.id === seriesData.id
    );

    if (index > -1) {
      options.value.series[index] = seriesData;
    } else {
      options.value.series.push(seriesData);
    }
  };

  const updateXAxis = (xAxisData: XAXisOption) => {
    if (options.value.xAxis === undefined) {
      options.value.xAxis = [];
    }
    let index = options.value.xAxis.findIndex(
      (item: XAXisOption) => item.id === xAxisData.id
    );

    if (index > -1) {
      options.value.xAxis[index] = xAxisData;
    } else {
      options.value.xAxis.push(xAxisData);
    }
  };
  const updateYAxis = (yAxisData: YAXisOption) => {
    if (options.value.yAxis === undefined) {
      options.value.yAxis = [];
    }
    let index = options.value.yAxis.findIndex(
      (item: YAXisOption) => item.id === yAxisData.id
    );

    if (index > -1) {
      options.value.yAxis[index] = yAxisData;
    } else {
      options.value.yAxis.push(yAxisData);
    }
  };
  const updateGrid = (gridData: GridComponentOption) => {
    if (options.value.grid === undefined) {
      options.value.grid = [];
    }
    let index = options.value.grid.findIndex(
      (item: GridComponentOption) => item.id === gridData.id
    );

    if (index > -1) {
      options.value.grid[index] = gridData;
    } else {
      options.value.grid.push(gridData);
    }
  };
  const updateTitle = (titleData: TitleComponentOption) => {
    if (options.value.title === undefined) {
      options.value.title = [];
    }
    let index = options.value.title.findIndex(
      (item: TitleComponentOption) => item.id === titleData.id
    );

    if (index > -1) {
      options.value.title[index] = titleData;
    } else {
      options.value.title.push(titleData);
    }
  };

  const updateLegend = (legendData: LegendComponentOption) => {
    if (options.value.legend === undefined) {
      options.value.legend = [];
    }
    let index = options.value.legend.findIndex(
      (item: LegendComponentOption) => item.id === legendData.id
    );

    if (index > -1) {
      options.value.legend[index] = legendData;
    } else {
      options.value.legend.push(legendData);
    }
  };

  const updateTooltip = (tooltipData: TooltipComponentOption) => {
    if (options.value.tooltip === undefined) {
      options.value.tooltip = [];
    }
    let index = options.value.tooltip.findIndex(
      (item: TooltipComponentOption) => item.id === tooltipData.id
    );

    if (index > -1) {
      options.value.tooltip[index] = tooltipData;
    } else {
      options.value.tooltip.push(tooltipData);
    }
  };
  provide<EchartsContext>(ECHARTS_CONTEXT_KEY, {
    updateSeries,
    updateXAxis,
    updateYAxis,
    updateGrid,
    updateTitle,
    updateLegend,
    updateTooltip,
  });
  return null;
}

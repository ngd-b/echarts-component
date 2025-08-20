import type { EChartsCoreOption, EChartsInitOpts } from "echarts/core";
import { TextCommonOption } from "../common/type";

export type SeriesConfig = Partial<
  Pick<
    EChartsCoreOption,
    // | "darkMode"
    | "color"
    // | "backgroundColor"
    | "animation"
    | "animationThreshold"
    | "animationDuration"
    | "animationEasing"
    | "animationDelay"
    | "animationDurationUpdate"
    | "animationEasingUpdate"
    | "animationDelayUpdate"
    | "stateAnimation"
    | "blendMode"
    | "hoverLayerThreshold"
    // | "useUTC"
    // | "options"
  > & {
    theme?: string | object | null;
    config?: EChartsInitOpts;
  }
>;

export const DefaultSeriesConfig: SeriesConfig = {
  animation: true,
};

export type TextType = "textStyle";
export type TextOptions = TextCommonOption;

export const DefaultTextStyleOptions: TextCommonOption = {};
export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
};

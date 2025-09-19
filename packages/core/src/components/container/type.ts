import type { EChartsInitOpts } from "echarts/core";
import { TextCommonOption } from "../common/type";
import { AnimationOptionMixin, ZRColor } from "echarts/types/src/util/types.js";
import { AnimationEasing } from "echarts/types/dist/shared";

export type EChartsOption = Partial<
  {
    color?: ZRColor | ZRColor[];
    backgroundColor: ZRColor;
    stateAnimation?: {
      duration?: number;
      easing?: AnimationEasing;
      delay?: number;
    };
    blendMode?: string;
    hoverLayerThreshold?: number;
    useUTC: boolean;
    richInheritPlainLabel: boolean;

    theme?: string | object | null;
    config?: EChartsInitOpts;
  } & AnimationOptionMixin
>;

export type TextType = "textStyle";
export type TextOptions = TextCommonOption;

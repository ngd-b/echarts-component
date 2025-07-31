import { EffectScope, getCurrentScope, inject, provide, Ref, useId } from "vue";
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
import { ECBasicOption, SetOptionOpts } from "echarts/types/dist/shared";

export const ECHARTS_CONTEXT_KEY = Symbol("vue-echarts");
type Scope = (EffectScope & { vueEchartsId: string }) | undefined;

type UpdateOption =
  | SeriesOption
  | XAXisOption
  | YAXisOption
  | GridComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption;

interface UseVueEchartsOptions {
  id: string;
  options: Ref<EchartsOptions>;
}

let options: Ref<EchartsOptions>;

/**
 *
 * @returns EchartsContext
 * @param idOrConfig
 */
export function useVueEcharts(id?: string): EchartsContext;
export function useVueEcharts(
  config?: Partial<UseVueEchartsOptions>
): EchartsContext;
export function useVueEcharts(
  idOrConfig?: string | Partial<UseVueEchartsOptions>
): EchartsContext {
  const isConfigObj = typeof idOrConfig === "object";
  const config = isConfigObj ? idOrConfig : { id: idOrConfig };

  const scope = getCurrentScope() as Scope;
  const id = config.id;
  const vueEchartsId = id ?? scope?.vueEchartsId;

  let vueEcharts: EchartsContext | null | undefined;

  if (scope) {
    const injectionState = inject<EchartsContext | null>(
      ECHARTS_CONTEXT_KEY,
      null
    );
    if (
      injectionState != null &&
      typeof injectionState !== "undefined" &&
      (!vueEchartsId || injectionState.id === vueEchartsId)
    ) {
      vueEcharts = injectionState;
    }
  }

  let ctx: EchartsContext = {
    id: id ?? useId(),
    vueEchartsRef: null,
    setOption,
    getWidth: vueEcharts?.vueEchartsRef?.getWidth,
    getHeight: vueEcharts?.vueEchartsRef?.getHeight,
    getOption: vueEcharts?.vueEchartsRef?.getOption,
    resize: vueEcharts?.vueEchartsRef?.resize,
    updateSeries: (data: SeriesOption) => update<SeriesOption>(data, "series"),
    updateXAxis: (data: XAXisOption) => update<XAXisOption>(data, "xAxis"),
    updateYAxis: (data: YAXisOption) => update<YAXisOption>(data, "yAxis"),
    updateGrid: (data: GridComponentOption) =>
      update<GridComponentOption>(data, "grid"),
    updateTitle: (data: TitleComponentOption) =>
      update<TitleComponentOption>(data, "title"),
    updateLegend: (data: LegendComponentOption) =>
      update<LegendComponentOption>(data, "legend"),
    updateTooltip: (data: TooltipComponentOption) =>
      update<TooltipComponentOption>(data, "tooltip"),
  };
  if (!vueEcharts || (vueEchartsId && vueEcharts.id !== vueEchartsId)) {
    vueEcharts = ctx;

    provide<EchartsContext>(ECHARTS_CONTEXT_KEY, vueEcharts);
  }
  if (scope) {
    scope.vueEchartsId = vueEcharts.id;
  }

  if (isConfigObj && config.options) {
    options = config.options;
  }
  /**
   * 更新图标配置
   * @param data
   * @param prop
   */
  function update<S extends UpdateOption = UpdateOption>(
    data: S,
    prop: "series" | "xAxis" | "yAxis" | "grid" | "title" | "legend" | "tooltip"
  ) {
    let propData = options.value[prop] || [];

    let index = (propData as Array<{ id: string }>).findIndex(
      (item) => item.id === data.id
    );

    if (index > -1) {
      propData[index] = data;
    } else {
      (propData as S[]).push(data);
    }
    (options.value[prop] as S[]) = propData as S[];
  }
  function setOption(
    option: ECBasicOption,
    arg2?: boolean | SetOptionOpts,
    arg3?: boolean
  ) {
    if (!vueEcharts || !vueEcharts.vueEchartsRef) {
      throw new Error("[Vue Echarts]: echarts instance is not ready.");
    }

    if (typeof arg2 === "object" || typeof arg2 === "undefined") {
      vueEcharts.vueEchartsRef.setOption(option, arg2);
    } else {
      vueEcharts.vueEchartsRef.setOption(option, arg2, arg3);
    }
  }

  return vueEcharts;
}

import {
  EffectScope,
  getCurrentScope,
  inject,
  provide,
  reactive,
  Ref,
  shallowReactive,
  shallowRef,
  toRefs,
  useId,
} from "vue";
import type {
  EchartsContext,
  EchartsOptions,
  EchartsState,
  MainType,
} from "../types";
import type {
  GridComponentOption,
  LegendComponentOption,
  SeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
  XAXisOption,
  YAXisOption,
} from "../components/type";
import { useActions, useEvents, userMethods } from "../stores";

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

  let vueEcharts: EchartsContext | undefined;

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

  if (!vueEcharts || (vueEchartsId && vueEcharts.id !== vueEchartsId)) {
    const state: EchartsState = {
      vueEchartsRef: shallowRef(null),
    };
    const reactiveState = reactive<EchartsState>(state);
    // 注册方法
    const actions = useActions(toRefs(reactiveState));
    // 注册实例方法
    const methods = userMethods(toRefs(reactiveState));
    // 注册事件
    const events = useEvents(toRefs(reactiveState));

    let ctx: EchartsContext = {
      id: id ?? useId(),
      ...toRefs(reactiveState),
      updateSeries: (data: SeriesOption) =>
        update<SeriesOption>(data, "series"),
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
      ...methods,
      actions: shallowReactive(actions),
      ...events,
    };
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
    prop: MainType
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

  return vueEcharts;
}

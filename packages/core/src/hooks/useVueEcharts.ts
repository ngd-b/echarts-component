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
  MainTypeMap,
} from "../types";
import { useActions, useEvents, userMethods } from "../stores";

export const ECHARTS_CONTEXT_KEY = Symbol("vue-echarts");
type Scope = (EffectScope & { vueEchartsId: string }) | undefined;

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
      update,
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
  function update<K extends MainType>(prop: K, data: MainTypeMap[K]) {
    let propData = options.value[prop] || [];

    let index = (propData as Array<{ id: string }>).findIndex(
      (item) => item.id === data.id
    );

    if (index > -1) {
      propData[index] = data;
    } else {
      (propData as MainTypeMap[K][]).push(data);
    }
    (options.value[prop] as MainTypeMap[K][]) = propData as MainTypeMap[K][];
  }

  return vueEcharts;
}

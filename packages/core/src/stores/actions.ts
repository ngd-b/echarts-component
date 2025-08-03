import type { Actions as ActionsReturn, EchartsState } from "../types";

const Actions = [
  "highlight",
  "downplay",
  "select",
  "unselect",
  "toggleSelect",
  "legendAllSelect",
  "legendInverseSelect",
  "legendScroll",
  "legendToggleSelect",
  "legendSelect",
  "legendUnSelect",
  "showTip",
  "hideTip",

  "dataZoom",
  "takeGlobalCursor",

  "selectDataRange",
  "timelineChange",
  "timelinePlayChange",
  "restore",
  "geoSelect",
  "geoUnSelect",
  "geoToggleSelect",

  "brush",
  "brushEnd",
  "treemapZoomToNode",
  "treemapRootToNode",
] as const;

type ActionName = (typeof Actions)[number];

export const useActions = (state: EchartsState): ActionsReturn => {
  const actions = Actions.reduce((obj, name) => {
    obj[name] = (param) => {
      if (!state.vueEchartsRef.value) {
        throw new Error("[Vue Echarts]: echarts instance is not ready.");
      }
      state.vueEchartsRef.value.dispatchAction({
        type: name,
        ...param,
      });
    };
    return obj;
  }, {} as Record<ActionName, ActionsReturn[ActionName]>);

  return actions;
};

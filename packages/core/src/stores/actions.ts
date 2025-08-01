import { Actions, EchartsState } from "../types";

const Actions = [
  "highlight",
  "downplay",
  "select",
  "unselect",
  "toggleSelect",
] as const;

type ActionName = (typeof Actions)[number];

export const useActions = (state: EchartsState): Actions => {
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
  }, {} as Record<ActionName, Actions[ActionName]>);

  return actions;
};

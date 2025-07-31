import { DownplayPayload, HighlightPayload, Payload } from "echarts";
import { Actions } from "../types";
import { useVueEcharts } from "../hooks";

const Actions = [
  "highlight",
  "downplay",
  "select",
  "unselect",
  "toggleSelect",
] as const;

type ActionName = (typeof Actions)[number];

interface ActionMapParam {
  highlight: Omit<HighlightPayload, "type">;
  downplay: Omit<DownplayPayload, "type">;
  select: Omit<Payload, "type">;
  unselect: Omit<Payload, "type">;
  toggleSelect: Omit<Payload, "type">;
}

export const useActions = (): Actions => {
  const actions = Actions.reduce((obj, name) => {
    obj[name] = (param: ActionMapParam[typeof name] = {}) => {
      const ctx = useVueEcharts();

      let chartRef = ctx?.vueEchartsRef;
      if (!chartRef || !chartRef.value) {
        throw new Error("[Vue Echarts]: echarts instance is not ready.");
      }
      chartRef.value.dispatchAction({
        type: name,
        ...param,
      });
    };
    return obj;
  }, {} as Record<ActionName, (param?: ActionMapParam[ActionName]) => void>);

  return actions;
};

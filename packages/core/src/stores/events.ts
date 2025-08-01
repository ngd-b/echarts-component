import type { EchartsState, EventHooks, EventName } from "../types";
import { Events } from "../types";

export const useEvents = (state: EchartsState): EventHooks => {
  let events = {} as EventHooks;

  (Events as readonly string[]).forEach((eventName) => {
    const methodName = `on${
      eventName.charAt(0).toUpperCase() + eventName.slice(1)
    }` as keyof EventHooks;

    events[methodName] = (...args: any[]) => {
      if (!state.vueEchartsRef.value) {
        throw new Error("[Vue Echarts]: echarts instance is not ready.");
      }

      if (args.length == 1) {
        state.vueEchartsRef.value.on(eventName, args[0]);
      } else if (args.length > 1) {
        state.vueEchartsRef.value.on(eventName, args[0], args[1]);
      }
    };
  });

  return events;
};

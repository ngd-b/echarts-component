import type { InjectionKey } from "vue";
import type { Actions } from "../components/type";

export const VueEcharts: InjectionKey<Actions> = Symbol("VueEcharts");

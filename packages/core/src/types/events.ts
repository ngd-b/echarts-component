import { ECElementEvent } from "echarts";
import { MainType } from "./context";

export type EventQuery<T extends MainType = MainType> = {
  [K in `${T}Index`]: number;
} & {
  [K in `${T}Name`]: string;
} & {
  [K in `${T}Id`]: string;
} & {
  dataIndex: number;
  name: string;
  dataType: string;
  element: string;
};

export type EventFn = {
  (
    query: string | Partial<EventQuery>,
    handler: (params: ECElementEvent) => void,
    context?: any
  ): void;
  (handler: (params: ECElementEvent) => void, context?: any): void;
};

export const Events = [
  "click",
  "dblclick",
  "mousedown",
  "mousemove",
  "mouseup",
  "mouseover",
  "mouseout",
  "globalout",
  "contextmenu",

  "highlight",
  "downplay",
  "selectchanged",
  "legendselectchanged",
  "legendselected",
  "legendunselected",
  "legendselectall",
  "legendinverseselect",
  "legendscroll",

  "datazoom",
  "datarangeselected",
  "graphroam",
  "georoam",
  "treeroam",
  "timelinechanged",
  "timelineplaychanged",
  "restore",

  "dataviewchanged",
  "magictypechanged",
  "geoselectchanged",
  "geoselected",
  "geounselected",
  "axisareaselected",
  "brush",
  "brushEnd",
  "brushselected",

  "globalcursortaken",
  "rendered",
  "finished",
] as const;

export type EventName = (typeof Events)[number];

export type EventHooks = {
  [key in EventName as `on${Capitalize<key>}`]: EventFn;
};

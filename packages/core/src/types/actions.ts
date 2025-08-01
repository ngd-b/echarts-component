import { DownplayPayload, HighlightPayload, Payload } from "echarts";

export type highlight = (param: Omit<HighlightPayload, "type">) => void;
export type downplay = (param: Omit<DownplayPayload, "type">) => void;
export type select = (param: Omit<Payload, "type">) => void;
export type unselect = (param: Omit<Payload, "type">) => void;
export type toggleSelect = (param: Omit<Payload, "type">) => void;

export interface Actions {
  highlight: highlight;
  downplay: downplay;
  select: select;
  unselect: unselect;
  toggleSelect: toggleSelect;
}

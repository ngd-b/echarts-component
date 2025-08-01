import { DownplayPayload, HighlightPayload, Payload } from "echarts";

export type highlight = (param: Omit<HighlightPayload, "type">) => void;
export type downplay = (param: Omit<DownplayPayload, "type">) => void;
export type select = (param: Omit<Payload, "type">) => void;
export type unselect = (param: Omit<Payload, "type">) => void;
export type toggleSelect = (param: Omit<Payload, "type">) => void;

// legend
export type legendSelect = (param: Omit<Payload, "type">) => void;
export type legendUnSelect = (param: Omit<Payload, "type">) => void;
export type legendToggleSelect = (param: Omit<Payload, "type">) => void;
export type legendAllSelect = (param: Omit<Payload, "type">) => void;
export type legendInverseSelect = (param: Omit<Payload, "type">) => void;
export type legendScroll = (param: Omit<Payload, "type">) => void;

// tooltip
export type showTip = (param: Omit<Payload, "type">) => void;
export type hideTip = (param: Omit<Payload, "type">) => void;

export interface Actions {
  highlight: highlight;
  downplay: downplay;
  select: select;
  unselect: unselect;
  toggleSelect: toggleSelect;

  legendAllSelect: legendAllSelect;
  legendInverseSelect: legendInverseSelect;
  legendScroll: legendScroll;
  legendToggleSelect: legendToggleSelect;
  legendSelect: legendSelect;
  legendUnSelect: legendUnSelect;

  showTip: showTip;
  hideTip: hideTip;
}

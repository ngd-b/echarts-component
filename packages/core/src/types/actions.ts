import { DownplayPayload, HighlightPayload, Payload } from "echarts";

export interface Actions {
  highlight: (param: Omit<HighlightPayload, "type">) => void;
  downplay: (param: Omit<DownplayPayload, "type">) => void;
  select: (params: Omit<Payload, "type">) => void;
  unselect: (params: Omit<Payload, "type">) => void;
  toggleSelect: (param: Omit<Payload, "type">) => void;
}

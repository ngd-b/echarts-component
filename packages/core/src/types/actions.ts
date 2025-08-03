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

// datazoom
export type dataZoom = (param: Omit<Payload, "type">) => void;
export type takeGlobalCursor = (param: Omit<Payload, "type">) => void;

// visualMap
export type selectDataRange = (param: Omit<Payload, "type">) => void;

// timeline
export type timelineChange = (param: Omit<Payload, "type">) => void;
export type timelinePlayChange = (param: Omit<Payload, "type">) => void;

// toolbox
export type restore = (param: Omit<Payload, "type">) => void;

// geo
export type geoSelect = (param: Omit<Payload, "type">) => void;
export type geoUnSelect = (param: Omit<Payload, "type">) => void;
export type geoToggleSelect = (param: Omit<Payload, "type">) => void;

//  brush
export type brush = (param: Omit<Payload, "type">) => void;
export type brushEnd = (param: Omit<Payload, "type">) => void;
// export type takeGlobalCursor = (param: Omit<Payload, "type">) => void;

// treemap
export type treemapZoomToNode = (param: Omit<Payload, "type">) => void;
export type treemapRootToNode = (param: Omit<Payload, "type">) => void;

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

  dataZoom: dataZoom;
  takeGlobalCursor: takeGlobalCursor;

  selectDataRange: selectDataRange;
  timelineChange: timelineChange;
  timelinePlayChange: timelinePlayChange;
  restore: restore;
  geoSelect: geoSelect;
  geoUnSelect: geoUnSelect;
  geoToggleSelect: geoToggleSelect;

  brush: brush;
  brushEnd: brushEnd;
  treemapZoomToNode: treemapZoomToNode;
  treemapRootToNode: treemapRootToNode;
}

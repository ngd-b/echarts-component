import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
  UniversalTransitionComponentOption,
  RippleEffectComponentOption,
  PointerComponentOption,
  AnchorComponentOption,
  EffectComponentOption,
  LevelComponentOption,
  LeavesComponentOption,
} from "../components/type";

export type SeriesType =
  | "labelLine"
  | "labelLayout"
  | "universalTransition"
  | "rippleEffect"
  | "pointer"
  | "anchor"
  | "effect"
  | "leaves";

export type SeriesTypeMulti = "levels";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
  universalTransition: UniversalTransitionComponentOption;
  rippleEffect: RippleEffectComponentOption;
  pointer: PointerComponentOption;
  anchor: AnchorComponentOption;
  effect: EffectComponentOption;
  leaves: LeavesComponentOption;
};

export type SeriesTypeMultiMap = {
  levels: LevelComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
  updateMulti: <K extends SeriesTypeMulti>(
    name: K,
    data: SeriesTypeMultiMap[K]
  ) => void;
}

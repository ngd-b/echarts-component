import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
  UniversalTransitionComponentOption,
  RippleEffectComponentOption,
  PointerComponentOption,
  AnchorComponentOption,
  EffectComponentOption,
} from "../components/type";

export type SeriesType =
  | "labelLine"
  | "labelLayout"
  | "universalTransition"
  | "rippleEffect"
  | "pointer"
  | "anchor"
  | "effect";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
  universalTransition: UniversalTransitionComponentOption;
  rippleEffect: RippleEffectComponentOption;
  pointer: PointerComponentOption;
  anchor: AnchorComponentOption;
  effect: EffectComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

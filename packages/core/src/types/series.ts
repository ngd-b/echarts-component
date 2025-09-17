import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
  UniversalTransitionComponentOption,
  RippleEffectComponentOption,
  PointerComponentOption,
} from "../components/type";

export type SeriesType =
  | "labelLine"
  | "labelLayout"
  | "universalTransition"
  | "rippleEffect"
  | "pointer";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
  universalTransition: UniversalTransitionComponentOption;
  rippleEffect: RippleEffectComponentOption;
  pointer: PointerComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

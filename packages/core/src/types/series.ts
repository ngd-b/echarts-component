import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
  UniversalTransitionComponentOption,
  RippleEffectComponentOption,
} from "../components/type";

export type SeriesType =
  | "labelLine"
  | "labelLayout"
  | "universalTransition"
  | "rippleEffect";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
  universalTransition: UniversalTransitionComponentOption;
  rippleEffect: RippleEffectComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

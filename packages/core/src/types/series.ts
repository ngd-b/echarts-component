import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
  UniversalTransitionComponentOption,
} from "../components/type";

export type SeriesType = "labelLine" | "labelLayout" | "universalTransition";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
  universalTransition: UniversalTransitionComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

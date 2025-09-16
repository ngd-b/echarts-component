import {
  LabelLineComponentOption,
  LabelLayoutComponentOption,
} from "../components/type";

export type SeriesType = "labelLine" | "labelLayout";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
  labelLayout: LabelLayoutComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

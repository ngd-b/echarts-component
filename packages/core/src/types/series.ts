import { LabelLineComponentOption } from "../components/type";

export type SeriesType = "labelLine";

export type SeriesTypeMap = {
  labelLine: LabelLineComponentOption;
};

export interface SeriesContext {
  update: <K extends SeriesType>(name: K, data: SeriesTypeMap[K]) => void;
}

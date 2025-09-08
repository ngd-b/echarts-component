import { DataBackgroundComponentOption } from "../components/type";

export type SliderParam = "dataBackground" | "selectedDataBackground";

export type SliderParamMap = {
  dataBackground: DataBackgroundComponentOption;
  selectedDataBackground: DataBackgroundComponentOption;
};

export type SliderParamOption = DataBackgroundComponentOption;

export interface SliderContext {
  update: <K extends SliderParam>(name: K, data: SliderParamMap[K]) => void;
}

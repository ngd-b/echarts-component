import type {
  AreaStyleOption,
  ItemStyleOption,
  LabelOption,
  LineStyleOption,
} from "../type";

export type EmphasisComponentOption = {
  disabled?: boolean;
  scale?: boolean;
  scaleSize?: number;
  focus?: "none" | "self" | "series";
  blurScope?: "coordinateSystem" | "series" | "global";
  label?: LabelOption;
  endLabel?: LabelOption;
  upperLabel?: LabelOption;
  edgeLabel?: LabelOption;
  selectorLabel?: LabelOption;
  itemStyle?: ItemStyleOption;
  lineStyle?: LineStyleOption;
  areaStyle?: AreaStyleOption;
};

export type EmphasisOption = Partial<
  Pick<EmphasisComponentOption, "disabled" | "scale">
>;

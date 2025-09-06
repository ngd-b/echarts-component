import type {
  AreaStyleOption,
  ItemStyleOption,
  LabelOption,
  LineStyleOption,
} from "../type";

export type EmphasisComponentOption = {
  disabled?: boolean;
  scale?: boolean;
  label?: LabelOption;
  endLabel?: LabelOption;
  itemStyle?: ItemStyleOption;
  lineStyle?: LineStyleOption;
  areaStyle?: AreaStyleOption;
};

export type EmphasisOption = Partial<
  Pick<EmphasisComponentOption, "disabled" | "scale">
>;

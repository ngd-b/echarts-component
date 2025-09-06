import { EmphasisComponentOption } from "../emphasis/type";

export type SelectComponentOption = Omit<
  EmphasisComponentOption,
  "focus" | "scale" | "scaleSize" | "blurScope"
>;

export type SelectOption = Pick<SelectComponentOption, "disabled">;

import { EmphasisComponentOption } from "../emphasis/type";

export type BlurComponentOption = Omit<
  EmphasisComponentOption,
  "focus" | "scale" | "scaleSize" | "blurScope" | "disabled"
>;

export type BlurOption = BlurComponentOption;

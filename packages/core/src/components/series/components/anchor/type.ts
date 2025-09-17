import type { PointerComponentOption } from "../type";

export type AnchorComponentOption = Omit<
  PointerComponentOption,
  "width" | "height"
>;
export type AnchorOption = Partial<Omit<AnchorComponentOption, "itemStyle">>;

import type {
  MarkPointComponentOption,
  MarkLineComponentOption,
  MarkAreaComponentOption,
} from "../components/type";

export type MarkType = "markPoint" | "markLine" | "markArea";

export type MarkTypeMap = {
  markPoint: MarkPointComponentOption;
  markLine: MarkLineComponentOption;
  markArea: MarkAreaComponentOption;
};

export interface MarkContext {
  updateMark: <T extends MarkType>(name: T, data: MarkTypeMap[T]) => void;
}

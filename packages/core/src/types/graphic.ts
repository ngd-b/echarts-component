import type {
  GraphicElementComponentOption,
  GraphicComponentOption,
  GraphicComponentGroupOption,
} from "@/components/type";

export type GraphicElementOption = GraphicElementComponentOption;

export type GraphicOptionType = GraphicComponentOption;

export interface GraphicContext {
  update: (data: GraphicElementOption) => void;
}

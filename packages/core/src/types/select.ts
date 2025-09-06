import { SelectComponentOption } from "../components/type";

export type { SelectComponentOption };
export interface SelectContext {
  update: (data: SelectComponentOption) => void;
}

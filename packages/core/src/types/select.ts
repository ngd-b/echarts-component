import { SelectComponentOption } from "../components/type";

export { SelectComponentOption };
export interface SelectContext {
  update: (data: SelectComponentOption) => void;
}

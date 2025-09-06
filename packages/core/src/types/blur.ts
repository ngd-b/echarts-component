import { BlurComponentOption } from "../components/type";

export type { BlurComponentOption };
export interface BlurContext {
  update: (data: BlurComponentOption) => void;
}

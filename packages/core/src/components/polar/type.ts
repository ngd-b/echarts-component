import type { PolarOption } from "echarts/types/dist/shared";

export type { PolarOption };

export type Polar = Partial<Omit<PolarOption, "tooltip">>;

export const DefaultPolar: Polar = {
  zlevel: 0,
  z: 0,
  center: ["50%", "50%"],
  // coordinateSystem: "none",
  // coordinateSystemUsage:"box",
  // calendarIndex:0,
  // matrixIndex:0,
};

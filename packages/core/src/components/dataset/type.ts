import type { DatasetOption as DatasetEchartsComponentOption } from "echarts/types/dist/shared";

type DatasetComponentOption = Omit<
  DatasetEchartsComponentOption,
  "transform"
> & {
  transform?: DatasetTransformOption[];
};

export type { DatasetComponentOption };

export type DatasetOption = Partial<Omit<DatasetComponentOption, "transform">>;

type FilterRelationValue = string | number | Date;
type FilterTransformOption = {
  type: "filter";
  config?: FilterConditionOption;
  print?: boolean;
};
type FilterConditionOption =
  | true
  | false
  | FilterRelationOption
  | FilterLogicalOption;

type FilterRelationOption = {
  dimension: string | number;
  parser?: "time" | "trim" | "number";
  lt?: FilterRelationValue; // less than
  lte?: FilterRelationValue; // less than or equal
  gt?: FilterRelationValue; // greater than
  gte?: FilterRelationValue; // greater than or equal
  eq?: FilterRelationValue; // equal
  ne?: FilterRelationValue; // not equal
  "<"?: FilterRelationValue; // lt
  "<="?: FilterRelationValue; // lte
  ">"?: FilterRelationValue; // gt
  ">="?: FilterRelationValue; // gte
  "="?: FilterRelationValue; // eq
  "!="?: FilterRelationValue; // ne
  "<>"?: FilterRelationValue; // ne (SQL style)
  reg?: RegExp | string; // RegExp
};

type FilterLogicalOption = {
  and?: FilterConditionOption[];
  or?: FilterConditionOption[];
  not?: FilterConditionOption;
};

type SortTransformOption = {
  type: "sort";
  config?: SortTransformOptionConfig;
  print?: boolean;
};

type SortTransformOptionConfig = {
  dimension: string | number;
  order: "asc" | "desc";
  incomparable?: "min" | "max";
  parser?: "time" | "trim" | "number";
};

export type DatasetTransformOption = { id: string } & (
  | FilterTransformOption
  | SortTransformOption
  | {
      type: `${string}:${string}`;
      config?: Record<string, any>;
    }
);

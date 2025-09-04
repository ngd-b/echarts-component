import type {
  ToolboxComponentOption,
  ToolboxBrushFeatureOption,
  ToolboxDataViewFeatureOption,
  ToolboxDataZoomFeatureOption,
  ToolboxFeatureOption,
  ToolboxMagicTypeFeatureOption,
  ToolboxRestoreFeatureOption,
  ToolboxSaveAsImageFeatureOption,
} from "echarts/types/dist/shared";

export type { ToolboxComponentOption };

export type ToolboxOption = Partial<
  Omit<ToolboxComponentOption, "feature" | "iconStyle" | "emphasis" | "tooltip">
>;

export { ToolboxBrushFeatureOption };
export type DefaultFeatureOption = Omit<
  ToolboxFeatureOption,
  "iconStyle" | "emphasis"
>;
export type DataViewFeatureOption = Omit<
  ToolboxDataViewFeatureOption,
  "iconStyle" | "emphasis"
>;
export type DataZoomFeatureOption = Omit<
  ToolboxDataZoomFeatureOption,
  "iconStyle" | "emphasis" | "brushStyle"
>;
export type MagicTypeFeatureOption = Omit<
  ToolboxMagicTypeFeatureOption,
  "iconStyle" | "emphasis"
>;
export type RestoreFeatureOption = Omit<
  ToolboxRestoreFeatureOption,
  "iconStyle" | "emphasis"
>;
export type SaveAsImageFeatureOption = Omit<
  ToolboxSaveAsImageFeatureOption,
  "iconStyle" | "emphasis"
>;

export type FeatureOption = Partial<
  | ToolboxBrushFeatureOption
  | DefaultFeatureOption
  | DataViewFeatureOption
  | DataZoomFeatureOption
  | MagicTypeFeatureOption
  | RestoreFeatureOption
  | SaveAsImageFeatureOption
>;

export type FeatureType =
  | "saveAsImage"
  | "restore"
  | "dataView"
  | "dataZoom"
  | "magicType"
  | "brush"
  | `my${string}`;

import type {
  FeatureType,
  DataViewFeatureOption,
  DataZoomFeatureOption,
  SaveAsImageFeatureOption,
  MagicTypeFeatureOption,
  RestoreFeatureOption,
  ToolboxBrushFeatureOption,
  DefaultFeatureOption,
} from "../components/toolbox/type";

export type FeatureTypeMap = {
  saveAsImage: SaveAsImageFeatureOption;
  restore: RestoreFeatureOption;
  dataView: DataViewFeatureOption;
  dataZoom: DataZoomFeatureOption;
  magicType: MagicTypeFeatureOption;
  brush: ToolboxBrushFeatureOption;
  [key: string]: DefaultFeatureOption;
};

export interface FeatureContext {
  updateFeature: <T extends FeatureType>(
    name: T,
    data: FeatureTypeMap[T]
  ) => void;
}

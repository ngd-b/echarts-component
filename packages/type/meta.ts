type ComponentKind = "common" | "series" | "chart";
export interface ComponentType {
  name: string;
  description?: string;
  kind?: ComponentKind;
  type?: "file" | "type" | "parent";
  types?: ComponentType[];
}

/**
 * 需要扁平处理的组件类型定义
 */
export const ComponentsType: ComponentType[] = [
  {
    name: "common",
    description: "Common Component's type definition",
    kind: "common",
    type: "file",
    types: [
      {
        name: "ZRColor",
      },
      {
        name: "AreaStyleOption",
      },
      {
        name: "AxisLineOption",
      },
      {
        name: "AxisTickOption",
      },
      {
        name: "MinorTickOption",
      },
      {
        name: "MinorSplitLineOption",
      },
      {
        name: "SplitAreaOption",
      },
      {
        name: "SplitLineOption",
      },
      {
        name: "AxisBreakOption",
      },
      {
        name: "ItemStyleOption",
      },

      {
        name: "LineStyleOption",
      },
      {
        name: "TimelineCheckpointStyle",
      },
      {
        name: "TimelineControlStyle",
      },
      {
        name: "MarkAreaOption",
      },
      {
        name: "MarkLineOption",
      },
      {
        name: "MarkPointOption",
      },
      {
        name: "TextCommonOption",
      },
      {
        name: "AxisNameTextStyleOption",
      },
      {
        name: "LabelOption",
      },
      {
        name: "AxisLabelBaseOption",
      },
      {
        name: "TimelineLabelOption",
      },
      {
        name: "DetailOption",
      },
    ],
  },
  {
    name: "components",
    kind: "chart",
    type: "file",
    types: [
      {
        name: "AngleAxisOption",
      },
      {
        name: "AxisPointerOption",
      },
      {
        name: "BrushOption",
      },
      {
        name: "CalendarOption",
      },
      {
        name: "DatasetOption",
      },
      {
        name: "dataZoom",
        type: "parent",
        types: [
          {
            name: "SliderDataZoomOption",
          },
          {
            name: "InsideDataZoomOption",
          },
        ],
      },
      {
        name: "geo",
        type: "parent",
        types: [
          {
            name: "GeoOption",
          },
          {
            name: "RegionOption",
          },
        ],
      },
      {
        name: "graphic",
        type: "parent",
        types: [
          {
            name: "GraphicComponentGroupOption",
          },
          {
            name: "GraphicComponentImageOption",
          },
          {
            name: "GraphicComponentTextOption",
          },
          {
            name: "GraphicComponentZRPathOption",
          },
          {
            name: "ElementTextConfig",
          },
          {
            name: "ImageStyleProps",
          },
          {
            name: "PathStyleProps",
          },
          {
            name: "TextStyleProps",
          },
          {
            name: "TransitionOptionMixin",
          },
          {
            name: "ImageProps",
          },
          {
            name: "PathProps",
          },
          {
            name: "GroupProps",
          },
          {
            name: "TextProps",
          },
        ],
      },
      {
        name: "GridOption",
      },
      {
        name: "LegendComponentOption",
      },
      {
        name: "matrix",
        type: "parent",
        types: [
          {
            name: "MatrixComponentOption",
          },
          {
            name: "MatrixDimensionOption",
          },
          {
            name: "MatrixBodyOption",
          },
          {
            name: "MatrixCornerOption",
          },
        ],
      },
      {
        name: "parallel",
        type: "parent",
        types: [
          {
            name: "ParallelCoordinateSystemOption",
          },
          {
            name: "ParallelAxisOption",
          },
        ],
      },
      {
        name: "PolarOption",
      },
      {
        name: "RadarOption",
      },
      {
        name: "RadiusAxisOption",
      },
      {
        name: "SingleAxisOption",
      },
      {
        name: "ThumbnailComponentOption",
      },
      {
        name: "timeline",
        type: "parent",
        types: [
          {
            name: "TimelineOption",
          },
          {
            name: "TimelineCheckpointStyle",
          },
          {
            name: "TimelineControlStyle",
          },
        ],
      },
      {
        name: "TitleOption",
      },
      {
        name: "toolbox",
        type: "parent",
        types: [
          {
            name: "ToolboxComponentOption",
          },
          {
            name: "ToolboxBrushFeatureOption",
          },
          {
            name: "ToolboxDataViewFeatureOption",
          },
          {
            name: "ToolboxDataZoomFeatureOption",
          },
          {
            name: "ToolboxFeatureOption",
          },
          {
            name: "ToolboxMagicTypeFeatureOption",
          },
          {
            name: "ToolboxRestoreFeatureOption",
          },
          {
            name: "ToolboxSaveAsImageFeatureOption",
          },
        ],
      },
      {
        name: "TooltipOption",
      },
      {
        name: "visualMap",
        type: "parent",
        types: [
          {
            name: "PiecewiseVisualMapOption",
          },
          {
            name: "ContinousVisualMapOption",
          },
        ],
      },
      {
        name: "XAXisOption",
      },
      {
        name: "YAXisOption",
      },
    ],
  },
  {
    name: "series",
    kind: "chart",
    type: "file",
    types: [
      {
        name: "components",
        type: "parent",
        types: [
          {
            name: "LabelLayoutOption",
          },
          {
            name: "LabelLineOption",
          },
          {
            name: "TreeSeriesLeavesOption",
          },
          {
            name: "SankeyLevelOption",
          },
          {
            name: "TreemapSeriesLevelOption",
          },
          {
            name: "PointerOption",
          },
          {
            name: "RippleEffectOption",
          },
          {
            name: "UniversalTransitionOption",
          },
        ],
      },
      {
        name: "BarSeriesOption",
      },
      {
        name: "BoxplotSeriesOption",
      },
      {
        name: "CandlestickSeriesOption",
      },
      {
        name: "custom",
        type: "parent",
        types: [
          {
            name: "CustomSeriesOption",
          },
          {
            name: "CustomTextOption",
          },
          {
            name: "CustomImageOption",
          },
          {
            name: "CustomPathOption",
          },
          {
            name: "CustomCompoundPathOption",
          },
          {
            name: "CustomGroupOption",
          },
        ],
      },
      {
        name: "EffectScatterSeriesOption",
      },
      {
        name: "FunnelSeriesOption",
      },
      {
        name: "GaugeSeriesOption",
      },
      {
        name: "GraphSeriesOption",
      },
      {
        name: "HeatmapSeriesOption",
      },
      {
        name: "LineSeriesOption",
      },
      {
        name: "LinesSeriesOption",
      },
      {
        name: "MapSeriesOption",
      },
      {
        name: "ParallelSeriesOption",
      },
      {
        name: "PictorialBarSeriesOption",
      },
      {
        name: "PieSeriesOption",
      },
      {
        name: "RadarSeriesOption",
      },
      {
        name: "SankeySeriesOption",
      },
      {
        name: "ScatterSeriesOption",
      },
      {
        name: "SunburstSeriesOption",
      },
      {
        name: "ThemeRiverSeriesOption",
      },
      {
        name: "TreeSeriesOption",
      },
      {
        name: "TreemapSeriesOption",
      },
    ],
  },
];

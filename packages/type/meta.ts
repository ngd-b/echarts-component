export interface ComponentType {
  name: string;
  description?: string;
}

/**
 * 需要扁平处理的组件类型定义
 */
export const ComponentsType: ComponentType[] = [
  // {
  //   name: "GraphicComponentGroupOption",
  // },
  // {
  //   name: "GraphicComponentImageOption",
  // },
  // {
  //   name: "GraphicComponentTextOption",
  // },
  // {
  //   name: "GraphicComponentZRPathOption",
  // },
  {
    name: "GeoJSONGeometryMultiPolygonCompressed",
  },
];

import {
  ECBasicOption,
  ResizeOpts,
  SetOptionOpts,
} from "echarts/types/dist/shared";

type Coordinate = "series" | "xAxis" | "yAxis" | "grid" | "geo";
type CoordinateQuery<T extends Coordinate = Coordinate> = {
  [K in `${T}Index`]: number;
} & {
  [K in `${T}Name`]: string;
} & {
  [K in `${T}Id`]: string;
};

export type setOption =
  | ((option: ECBasicOption, notMerge?: boolean, lazyUpdate?: boolean) => void)
  | ((option: ECBasicOption, opts?: SetOptionOpts) => void);

export type getOption = () => ECBasicOption;
export type getWidth = () => number;
export type getHeight = () => number;
export type getDom = () => HTMLCanvasElement | HTMLDivElement;
export type resize = (opts?: ResizeOpts) => void;
export type setTheme = (theme: string, opts?: { silent: boolean }) => void;

//
export type clear = () => void;
export type dispose = () => void;
export type isDisposed = () => boolean;

export type renderToSVGString = (opts?: { useViewBox?: boolean }) => string;

export type convertFromPixel = (
  finder: CoordinateQuery,
  value: number[] | number
) => number[] | number;
export type convertToPixel = (
  finder: CoordinateQuery,
  value: number[] | number
) => number[] | number;

type LoadingType = "default";
interface LoadingOption {
  text: string;
  color: string;
  textColor: string;
  maskColor: string;
  zlevel: number;

  // 字体大小。从 `v4.8.0` 开始支持。
  fontSize: number;
  // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
  showSpinner: boolean;
  // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
  spinnerRadius: number;
  // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
  lineWidth: number;
  // 字体粗细。从 `v5.0.1` 开始支持。
  fontWeight: string;
  // 字体风格。从 `v5.0.1` 开始支持。
  fontStyle: string;
  // 字体系列。从 `v5.0.1` 开始支持。
  fontFamily: string;
}
export type showLoading = (type?: LoadingType, opts?: LoadingOption) => void;
export type hideLoading = () => void;

//
interface DataURLOption {
  // 导出的格式，可选 png, jpg, svg
  // 注意：png, jpg 只有在 canvas 渲染器的时候可使用，svg 只有在使用 svg 渲染器的时候可用
  type?: string;
  // 导出的图片分辨率比例，默认为 1。
  pixelRatio?: number;
  // 导出的图片背景色，默认使用 option 里的 backgroundColor
  backgroundColor?: string;
  // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
  excludeComponents?: Array<string>;
}
export type getDataURL = (opts: DataURLOption) => string;
export type getConnectedDataURL = (opts: DataURLOption) => string;

//
export type appendData<T> = (opts: {
  // 要增加数据的系列序号。
  seriesIndex?: number;
  // 增加的数据。
  data?: Array<T> | T;
}) => string;

export interface Methods {
  setOption: setOption;
  getWidth: getWidth;
  getHeight: getHeight;
  getDom: getDom;
  getOption: getOption;
  resize: resize;
  // setTheme: setTheme;

  clear: clear;
  dispose: dispose;
  isDisposed: isDisposed;

  renderToSVGString: renderToSVGString;
  convertFromPixel: convertFromPixel;
  convertToPixel: convertToPixel;
  showLoading: showLoading;
  hideLoading: hideLoading;

  appendData: appendData<any>;
  getDataURL: getDataURL;
  getConnectedDataURL: getConnectedDataURL;
}

import {
  ECBasicOption,
  ResizeOpts,
  SetOptionOpts,
} from "echarts/types/dist/shared";

export type setOption =
  | ((option: ECBasicOption, notMerge?: boolean, lazyUpdate?: boolean) => void)
  | ((option: ECBasicOption, opts?: SetOptionOpts) => void);

export type getOption = () => ECBasicOption;
export type getWidth = () => number;
export type getHeight = () => number;
export type resize = (opts?: ResizeOpts) => void;

//
export type clear = () => void;
export type dispose = () => void;
export type isDisposed = () => boolean;

export interface Methods {
  setOption: setOption;
  getWidth: getWidth;
  getHeight: getHeight;
  getOption: getOption;
  resize: resize;

  clear: clear;
  dispose: dispose;
  isDisposed: isDisposed;
}

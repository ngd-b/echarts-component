export interface PackageManifest {
  name: string;
  display: string;
  description?: string;
  author?: string;
  utils?: boolean;
  iife?: boolean;
  mjs?: boolean;
  dts?: boolean;
  target?: string;
  globals?: Record<string, string>;
}

export const packages: PackageManifest[] = [
  {
    name: "core",
    display: "Echarts component for Vue.",
    utils: true,
    iife: false,
  },
];

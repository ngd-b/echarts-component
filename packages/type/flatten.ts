import fs from "node:fs";
import path from "path";
import { ComponentsType } from "./meta.ts";
import type { ComponentType } from "./meta.ts";
import * as tf from "type-flat";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const Root_Dir = path.resolve(__dirname, ".");
// 存放生成的类型
const Type_Output_Dir = path.join(Root_Dir, "./types");
// 读取echarts的类型定义文件位置
const Echarts_Type_Dir = path.join(
  Root_Dir,
  "node_modules/echarts/types/dist/shared.d.ts"
);

function collectCommonTypes(data: ComponentType[]): string[] {
  let arr: string[] = [];

  for (const item of data) {
    if (!["file", "parent"].includes(item.type)) {
      arr.push(item.name);
      continue;
    }
    if (item.types && item.types.length) {
      let result = collectCommonTypes(item.types);
      arr.push(...result);
    }
  }

  return arr;
}

//
async function run() {
  // 清理types目录
  if (fs.existsSync(Type_Output_Dir)) {
    fs.rmSync(Type_Output_Dir, { recursive: true, force: true });
  }
  fs.mkdirSync(Type_Output_Dir);

  // 读取所有的echarts类型定义
  let sourceFile = fs.readFileSync(Echarts_Type_Dir, { encoding: "utf-8" });

  // 收集 所有common的组件，这些基础组件之后不再扁平化
  let commonsType = collectCommonTypes(ComponentsType);

  // 按照需要生成的组件类型进行扁平化处理
  for (const comp of ComponentsType) {
    // 生成类型文件
    const file_path = path.join(Type_Output_Dir, comp.name);

    let typeNames = collectCommonTypes(comp.types);

    console.log(`正在生成 ${comp.name} 类型文件...`, typeNames);
    const content = tf.Flatten.flatten(sourceFile, typeNames, commonsType);

    // 写入文件
    fs.writeFileSync(file_path + ".ts", content);
  }

  console.log(`✅ 类型已扁平化生成到: ${Type_Output_Dir}`);
}

run();

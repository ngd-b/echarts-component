import fs from "node:fs";
import path from "path";
import { ComponentsType } from "./meta.ts";
import tf from "type-flat";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const Root_Dir = path.resolve(__dirname, ".");
// 存放生成的类型
const Type_Output_Dir = path.join(Root_Dir, "./types");
// 读取echarts的类型定义文件位置
const Echarts_Type_Dir = path.join(
  Root_Dir,
  "node_modules/echarts/types/dist/shared.d.ts"
);

// async function run() {
//   // 清理types目录
//   if (fs.existsSync(Type_Output_Dir)) {
//     fs.rmSync(Type_Output_Dir, { recursive: true, force: true });
//   }
//   fs.mkdirSync(Type_Output_Dir);
//   // 初始化 ts-morph 项目
//   const tsMorph = new Project({
//     tsConfigFilePath: path.resolve(Root_Dir, "tsconfig.json"),
//     skipFileDependencyResolution: true,
//   });
//   // 读取所有的echarts类型定义
//   let sourceFile = tsMorph.addSourceFileAtPath(Echarts_Type_Dir);

//   // 按照需要生成的组件类型进行扁平化处理
//   for (const comp of ComponentsType) {
//     // 生成类型文件
//     const file_path = path.join(Type_Output_Dir, comp.name);
//     output_file = tsMorph.createSourceFile(file_path + ".ts", "");
//     visited_types.clear();

//     const type_define =
//       sourceFile.getInterface(comp.name) ||
//       sourceFile.getTypeAlias(comp.name) ||
//       sourceFile.getEnum(comp.name);

//     if (!type_define) {
//       console.log(`❌ 组件类型 ${comp.name} 未找到`);
//       continue;
//     }
//     // 处理类型
//     const result = flattenTypeDefine(type_define);
//     // 写入文件

//     output_file.addStatements(result);
//     // 格式化代码
//     output_file.formatText({
//       ensureNewLineAtEndOfFile: true,
//       indentSize: 2,
//       convertTabsToSpaces: true,
//     });

//     await output_file.saveSync();
//   }

//   console.log(`✅ 类型已扁平化生成到: ${Type_Output_Dir}`);
// }

async function run() {
  // 清理types目录
  if (fs.existsSync(Type_Output_Dir)) {
    fs.rmSync(Type_Output_Dir, { recursive: true, force: true });
  }
  fs.mkdirSync(Type_Output_Dir);

  // 读取所有的echarts类型定义
  let sourceFile = fs.readFileSync(Echarts_Type_Dir, { encoding: "utf-8" });

  // 按照需要生成的组件类型进行扁平化处理
  for (const comp of ComponentsType) {
    // 生成类型文件
    const file_path = path.join(Type_Output_Dir, comp.name);

    // 处理类型
    const result = tf.flatten(sourceFile, comp.name);
    // 写入文件
    fs.writeFileSync(file_path + ".ts", result);
  }

  console.log(`✅ 类型已扁平化生成到: ${Type_Output_Dir}`);
}

run();

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// echarts 类型定义源文件路径
const srcPath = path.resolve(
  __dirname,
  "../node_modules/echarts/types/dist/echarts.d.ts"
);
// 目标路径
const destDir = path.resolve(__dirname, "../src/types");
const destPath = path.join(destDir, "echarts.d.ts");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(srcPath, destPath);
console.log("已将 echarts 类型定义复制到 src/types/echarts.d.ts");

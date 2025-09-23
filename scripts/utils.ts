import * as fs from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { packages } from "../meta/packages";
import { existsSync } from "node:fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const ROOT_DIR = resolve(__dirname, "../packages");

export const updatePackageJSON = async () => {
  const { version } = JSON.parse(
    await fs.readFile("package.json", { encoding: "utf-8" })
  );

  for (const { name, description, author } of packages) {
    const pkg_dir = join(ROOT_DIR, name);
    const pkg_json_dir = join(pkg_dir, "package.json");
    const pkg_json = JSON.parse(
      await fs.readFile(pkg_json_dir, { encoding: "utf-8" })
    );

    pkg_json.version = version;
    pkg_json.author = author || "hboot <bobolity@163.com>";
    pkg_json.description ||= description;

    await fs.writeFile(pkg_json_dir, `${JSON.stringify(pkg_json, null, 2)}\n`);
  }
};
export const updateIndexREADME = async () => {
  // 查看各个子包，如果有自己的readme，则不用处理，如果没有则把跟目录下的README.md复制过去
  for (const { name } of packages) {
    const pkg_dir = join(ROOT_DIR, name);

    const is_exist_readme = existsSync(join(pkg_dir, "README.md"));

    if (!is_exist_readme) {
      await fs.copyFile(
        join(__dirname, "../README.md"),
        join(pkg_dir, "README.md")
      );
    }
  }
};

/**
 * dynamic import all core functions and update the index.ts
 */
export const updateImport = () => {};

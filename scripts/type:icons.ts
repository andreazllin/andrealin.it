/* eslint-disable no-console */
import { readdirSync, writeFileSync } from "fs"
import { join } from "path"

const assetsDir = join(process.cwd(), "public/assets/icons")
const typesFile = join(process.cwd(), "src/types/icon.d.ts")

const icons = readdirSync(assetsDir)

const names: string[] = icons
  .map((filename) => {
    if (filename.endsWith(".svg")) {
      return filename.replace(".svg", "")
    }
  })
  .filter(Boolean)

const header = [
  "/**",
  " * !: DO NOT EDIT: This file was automatically generated.",
  " */",
  "",
  "export type IconName =",
  ""
]

const iconNames = names.map((iconName) => {
  return `\t| "${iconName}"\n`
}).join("")

const output = header.join("\n").concat(iconNames)

writeFileSync(typesFile, output)

console.log("Icons types generated successfully")

export type DiffInfo = {
  changes: number[],
  additions: number[]
}

type FileExtension = {
  [index: string]: string
}

export const FileExtensions: FileExtension = {
  javascript: "js",
  python: "py"
}
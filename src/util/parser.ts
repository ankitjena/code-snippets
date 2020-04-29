import { DiffInfo } from "../types";

export function getDiffKeyWords(str: string): string[] {
  return str.split("\n")
    .filter(
      line => 
      !line.startsWith("<") && 
      !line.startsWith(">") &&
      !line.startsWith("-")
    );
}

export function buildDiffObject(arr: string[]): DiffInfo {
  const ret: DiffInfo = {
    changes: [],
    additions: []
  };
  arr.forEach(str => {
    if(str.includes("c")) {
      const changes = str.split("c")[1].split(",").map(s => Number(s));
      if(changes.length > 1) {
        for(let i = changes[0]; i <= changes[1]; i++) {
          ret.changes.push(i);
        }
      } else {
        ret.changes.push(changes[0]);
      }
    } else if(str.includes("a")) {
      const additions = str.split("a")[1].split(",").map(s => Number(s));
      if(additions.length > 1) {
        for(let i = additions[0]; i<= additions[1]; i++) {
          ret.additions.push(i);
        }
      } else {
        ret.additions.push(additions[0]);
      }
    }
  });
  return ret;
}

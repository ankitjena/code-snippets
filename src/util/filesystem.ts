import fs from "fs";
import { join } from "path";

export const renameFile = (filePath: string) => {
  return new Promise((resolve, reject) => {
    fs.rename(filePath, filePath.replace("new", "current"), (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

export const deleteFile = (filePath: string) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

export const writeFile = (filePath: string, content: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", err => {
      if (err) reject(err);
      resolve();
    });
  });
};

export const getStoragePath = (fileName: string) => {
  return join(process.cwd(), "storage", fileName);
};
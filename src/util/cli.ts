import execa from "execa";

export async function getDiffOutput(currentFilePath: string, newFilePath: string) {
  try {
    await execa.command(`diff ${currentFilePath} ${newFilePath}`);
  } catch (error) {
    if(error.exitCode === 1) {
      return error.stdout;
    } else {
      throw error;
    }
  }
}
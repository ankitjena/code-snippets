import { Request, Response } from "express";
import { FileExtensions } from "../types";
import { getStoragePath, writeFile } from "../helpers/filesystem";
import { buildInitialMarkdown } from "../util/build";
import logger from "../util/logger";

type NewRequestBody = {
    username: string;
    name: string;
    snippet: string;
    language: string;
}

/**
 * POST new code snippet
 */
export const newCodeSnippet = async(req: Request, res: Response) => {
    try {
        const { username, name, snippet, language }: NewRequestBody = req.body;
        const fileName = `${username}-${name}-current.${FileExtensions[language]}`;
        const filePath = getStoragePath(fileName);
        await writeFile(filePath, snippet);
        const markdown =  buildInitialMarkdown(snippet, language);
        res.status(200).send(markdown);
    } catch(err) {
        logger.error(err);
    }
};

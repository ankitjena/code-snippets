import { Request, Response } from "express";
import fs from "fs";

/**
 * POST new code snippet
 */
export const index = (req: Request, res: Response) => {
    const { username, name, snippet, language } = req.body;
    const filename = `${username}-${name}-current.${language}`;
    
};

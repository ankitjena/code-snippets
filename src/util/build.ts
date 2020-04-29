/**
 * Builds the initial markdown for the code snippet and
 * return it
 * @param snippet Code received from the user
 * @param language Programming language eg. Javascript, Python
 */
export function buildInitialMarkdown(snippet: string, language: string) {
  return `\`\`\`${language}
${snippet}
\`\`\`
`;
}
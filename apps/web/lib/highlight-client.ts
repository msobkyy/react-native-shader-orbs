// A trimmed highlight.js for the browser: just TypeScript/TSX, enough for the live code snippet.
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

export const highlightTs = (code: string) => hljs.highlight(code, { language: "typescript" }).value;

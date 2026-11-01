import { highlight } from "@/lib/markdown";
import { CopyButton } from "./copy-button";

/** A highlighted code block with a Copy button. Highlighting happens on the server. */
export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="code">
      {lang && <span className="code-lang">{lang}</span>}
      {/* data-react: this button copies by itself, so the delegated handler for Markdown blocks skips it. */}
      <CopyButton text={code} className="copy-code" size="xs" data-react="">
        Copy
      </CopyButton>
      <pre>
        <code className="hljs" dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
      </pre>
    </div>
  );
}

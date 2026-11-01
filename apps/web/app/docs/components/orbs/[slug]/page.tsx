import { InfoIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { CodeTabs } from "@/components/code-tabs";
import { DocPager } from "@/components/doc-pager";
import { OrbPreview } from "@/components/orb-preview";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { exportName, getOrb, num, orbs } from "@/lib/orbs";
import { PageActions } from "@/components/page-actions";
import { mdUrl, orbMdName } from "@/lib/page-markdown";
import { pageMeta } from "@/lib/seo";
import { abs, install, peers, site } from "@/lib/site";

export const dynamicParams = false;

export const generateStaticParams = () => orbs.map((o) => ({ slug: o.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const orb = getOrb(slug);
  return orb
    ? pageMeta({
        title: `${orb.title} shader orb`,
        description: `${orb.title}: ${orb.note}. A WebGPU shader orb for React Native and Expo, with a live preview, ${orb.params.length} parameters, colors and copy-paste usage.`,
        path: `/docs/components/orbs/${orb.slug}/`,
        image: orb.slug,
        keywords: [`${orb.title} orb`, `${exportName(orb.slug)}`],
      })
    : {};
}

/** The props most people reach for. The full list is in the ShaderOrb reference. */
const componentProps: [string, string, string, string][] = [
  ["state", '"idle" | "thinking" | "speaking"', '"idle"', "The mood. Eases the parameters toward that preset."],
  ["size", "number", "280", "Width and height in points."],
  ["params", "Record<string, number>", "", "Parameter overrides by key, clamped to each range. See the shader params below."],
  ["colors", "Record<string, string>", "", "Hex colors by key. See the colors below."],
  ["volumes", "{ input?: number; output?: number }", "", "Levels from 0 to 1 that the shader reads as input and output loudness."],
  ["interactive", "boolean", "false", "Tap pulses the orb; holding makes it swell."],
  ["quality", '"auto" | "low" | "medium" | "high" | number', '"auto"', "Render scale. Lower is cheaper and softer."],
  ["maxFps", "number", "60", "Frame cap."],
  ["paused", "boolean", "false", "Stops drawing and keeps the last frame."],
  ["onReady", "() => void", "", "Called once the first frame is on screen."],
  ["onError", "(error: Error) => void", "", "Called if the orb can't start. Without it the error is logged once."],
];

export default async function OrbPage({ params }: Props) {
  const { slug } = await params;
  const orb = getOrb(slug);
  if (!orb) {
    notFound();
  }
  const i = orbs.findIndex((o) => o.slug === slug);
  const prev = orbs[i - 1];
  const next = orbs[i + 1];
  const name = exportName(orb.slug);
  const moods = orb.statePresets ? Object.keys(orb.statePresets) : [];

  const manual = (
    <ol className="steps-list">
      <li>
        Install the package and its peer dependencies:
        <CodeBlock lang="bash" code={`npm install ${site.pkg} ${peers}`} />
      </li>
      <li>
        Add the config plugin to <code>app.json</code>:
        <CodeBlock lang="json" code={`{\n  "expo": {\n    "plugins": ["react-native-webgpu"]\n  }\n}`} />
      </li>
      <li>
        Rebuild your development build (Expo Go can't load the WebGPU module):
        <CodeBlock lang="bash" code="npx expo run:android" />
      </li>
    </ol>
  );

  return (
    <div className="docs-content no-toc">
      <main className="doc">
        <article>
          <p className="crumbs">
            <Link href="/docs/components/orbs/">Orbs</Link> / {orb.title}
          </p>
          <header className="doc-head">
            <h1>{orb.title}</h1>
            <PageActions
              mdUrl={mdUrl(orbMdName(orb.slug))}
              pageUrl={abs(`/docs/components/orbs/${orb.slug}/`)}
              prev={prev && { href: `/docs/components/orbs/${prev.slug}/`, title: prev.title }}
              next={next && { href: `/docs/components/orbs/${next.slug}/`, title: next.title }}
            />
          </header>
          <p className="lead">{orb.note}</p>

          <OrbPreview slug={orb.slug} />

          <h2 id="installation">Installation</h2>
          {!site.published && (
            <Alert>
              <InfoIcon />
              <AlertTitle>Pre-release</AlertTitle>
              <AlertDescription>
                <code>{site.pkg}</code> isn't on npm yet; install it from the repository and follow the rest unchanged.
              </AlertDescription>
            </Alert>
          )}
          <CodeTabs
            tabs={[
              { label: "Command", content: <CodeBlock lang="bash" code={install} /> },
              { label: "Manual", content: manual },
            ]}
          />

          <h2 id="usage">Usage</h2>
          <CodeBlock lang="typescript" code={`import { ShaderOrb, ${name} } from "${site.pkg}";`} />
          <CodeBlock lang="typescript" code={`<ShaderOrb orb={${name}} size={280} state="idle" interactive />`} />

          <h2 id="props">Props</h2>
          <h3 id="component-props">Component props</h3>
          <p>
            The props you'll use most. <Link href="/docs/shader-orb/">The ShaderOrb reference</Link> lists all of them.
          </p>
          <div className="table-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {componentProps.map(([prop, type, def, text]) => (
                  <TableRow key={prop}>
                    <TableCell>
                      <code>{prop}</code>
                    </TableCell>
                    <TableCell className="whitespace-normal">
                      <code>{type}</code>
                    </TableCell>
                    <TableCell>{def && <code>{def}</code>}</TableCell>
                    <TableCell className="whitespace-normal text-muted-foreground">{text}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h3 id="shader-params">Shader params</h3>
          <p>
            Pass these through <code>params</code>. Values are clamped to the range shown. <Badge variant="secondary">integrated</Badge>{" "}
            parameters are phase clocks: the shader accumulates them over time, so the value acts as a rate.
          </p>
          <div className="table-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>Range</TableHead>
                  <TableHead>Step</TableHead>
                  <TableHead>Default</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orb.params.map((p) => (
                  <TableRow key={p.key}>
                    <TableCell>
                      <code>{p.key}</code>
                    </TableCell>
                    <TableCell>
                      {p.label} {p.integrate && <Badge variant="secondary">integrated</Badge>}
                    </TableCell>
                    <TableCell>
                      {num(p.min)} to {num(p.max)}
                    </TableCell>
                    <TableCell>{num(p.step)}</TableCell>
                    <TableCell>{num(p.default)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {orb.colors.length > 0 && (
            <>
              <h3 id="colors">Colors</h3>
              <p>
                Pass these through <code>colors</code> as hex strings.
              </p>
              <div className="table-card">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Key</TableHead>
                      <TableHead>Label</TableHead>
                      <TableHead>Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orb.colors.map((c) => (
                      <TableRow key={c.key}>
                        <TableCell>
                          <code>{c.key}</code>
                        </TableCell>
                        <TableCell>{c.label}</TableCell>
                        <TableCell>
                          <span className="dot" style={{ background: c.default }} /> <code>{c.default}</code>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}

          {moods.length > 0 && (
            <>
              <h3 id="moods">Moods</h3>
              <p>
                This orb ships presets for{" "}
                {moods.map((m, k) => (
                  <span key={m}>
                    {k > 0 && ", "}
                    <code>{m}</code>
                  </span>
                ))}
                . Choosing a <code>state</code> eases the parameters toward that preset; anything you pass in{" "}
                <code>params</code> still wins.
              </p>
            </>
          )}

          <h2 id="credits">Credits</h2>
          <p>
            Based on original work by <a href="https://x.com/XorDev">XorDev</a>, via shadercn. The shader is
            licensed for <strong>non-commercial use with attribution</strong>; see{" "}
            <Link href="/docs/licensing/">Licensing and credits</Link>.
          </p>
          <p>
            Ported to React Native by <a href={site.author.url}>{site.author.handle}</a>.
          </p>

          <p>
            Want to change something? <Link href={`/playground/?orb=${orb.slug}`}>Open {orb.title} in the playground</Link>.
          </p>
        </article>
        <DocPager
          prev={prev && { href: `/docs/components/orbs/${prev.slug}/`, title: prev.title }}
          next={next && { href: `/docs/components/orbs/${next.slug}/`, title: next.title }}
        />
      </main>
    </div>
  );
}

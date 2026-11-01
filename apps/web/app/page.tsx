import {
  ArrowRightIcon,
  AudioWaveform,
  BotIcon,
  Cpu,
  Gauge,
  Globe,
  Hand,
  Layers,
  Scale,
  SlidersHorizontal,
  Smartphone,
  SparklesIcon,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";
import { HeroOrb } from "@/components/hero-orb";
import { JsonLd } from "@/components/json-ld";
import { OrbCard } from "@/components/orb-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { maxParams, orbMeta } from "@/lib/orbs";
import { keywords } from "@/lib/seo";
import { abs, install, site } from "@/lib/site";

const usageExample = `import { ShaderOrb, orb01 } from "${site.pkg}";

export default function Screen() {
  return (
    <ShaderOrb
      orb={orb01}
      state="speaking"
      colors={{ tint: "#66ccff" }}
      params={{ speed: 1.2 }}
      size={320}
      interactive
    />
  );
}`;

const features: { icon: LucideIcon; title: string; text: string; span: number }[] = [
  { icon: Layers, title: "Drop-in component", text: "One import and one JSX element. Pick an orb, set a size, done.", span: 4 },
  {
    icon: SlidersHorizontal,
    title: "Live parameters",
    text: `Each orb exposes its own typed, range-checked knobs (up to ${maxParams}). Changes ease in with springs, so nothing snaps.`,
    span: 2,
  },
  {
    icon: Hand,
    title: "Reacts to touch",
    text: "A tap sends a pulse through the orb. Holding makes it swell and speed up, then it eases back on release.",
    span: 2,
  },
  {
    icon: Gauge,
    title: "Adaptive quality",
    text: "Auto mode renders at a lower resolution and steps it down when the frame rate drops. A frame cap saves battery.",
    span: 4,
  },
  {
    icon: AudioWaveform,
    title: "Three moods and audio",
    text: "Every orb ships idle, thinking and speaking presets, plus input and output volume to drive it from a voice or mic level.",
    span: 3,
  },
  {
    icon: Globe,
    title: "The same shaders on the web",
    text: "The orbs on this page are the same WGSL, driven by the same code, rendered through the browser's WebGPU.",
    span: 3,
  },
];

const stack = ["Expo", "React Native", "WebGPU", "TypeScript", "Reanimated", "MCP"];

const steps: [string, string][] = [
  ["Compile once", "The shaders are written in TypeGPU. A codegen step resolves each one to plain WGSL plus its parameter metadata."],
  [
    "Render with raw WebGPU",
    "At runtime a fullscreen triangle and one uniform buffer go through react-native-webgpu. All orbs share one GPU device and cached pipelines.",
  ],
  ["Drive it from props", "Springs ease every value toward its target, so changing a prop is smooth and doesn't rebuild anything."],
];

const reqs: { icon: LucideIcon; title: string; text: React.ReactNode }[] = [
  { icon: Smartphone, title: "Development build", text: "Expo Go can't load the native WebGPU module." },
  { icon: Cpu, title: "Peer packages", text: "react-native-webgpu, react-native-reanimated and react-native-worklets." },
  { icon: Terminal, title: "Tested on Android", text: "One physical device, React Native 0.88, Expo SDK 58. iOS is untested." },
  {
    icon: Scale,
    title: "Non-commercial shaders",
    text: (
      <>
        Unless you get XorDev's permission. <Link href="/docs/licensing/">Details</Link>.
      </>
    ),
  },
];

const faq: [string, React.ReactNode][] = [
  [
    "Does it work in Expo Go?",
    <>
      No. It relies on a native WebGPU module that isn't part of Expo Go. Use a development build (<code>npx expo run:android</code>{" "}
      or EAS Build).
    </>,
  ],
  ["Which platforms are tested?", "Android, on a physical mid-range phone. iOS hasn't been tested yet, and so is not claimed to work."],
  [
    "Can I use the shaders in a commercial app?",
    <>
      The library code is MIT, but the shaders are by XorDev and are licensed for non-commercial use with attribution. For
      commercial use you need XorDev's permission. See <Link href="/docs/licensing/">Licensing and credits</Link>.
    </>,
  ],
  [
    "What if a device has no WebGPU?",
    <>
      Support comes from <code>react-native-webgpu</code>. On a device where it can't get a GPU adapter the orb stays blank. A
      built-in fallback isn't part of the library yet.
    </>,
  ],
  [
    "Is it fast?",
    "These are ray-marched shaders and they are not free. On the test phone they run near 55 fps at 0.75x resolution. Heavier orbs will need a lower quality or a 30 fps cap, which is what the Performance guide covers.",
  ],
];

/** Plain-text answers for the FAQPage structured data. Kept next to the visible FAQ so they say the same thing. */
const faqText: [string, string][] = [
  ["Does it work in Expo Go?", "No. It relies on a native WebGPU module that isn't part of Expo Go. Use a development build (npx expo run:android or EAS Build)."],
  ["Which platforms are tested?", "Android, on a physical mid-range phone. iOS hasn't been tested yet, and so is not claimed to work."],
  [
    "Can I use the shaders in a commercial app?",
    "The library code is MIT, but the shaders are by XorDev and are licensed for non-commercial use with attribution. For commercial use you need XorDev's permission.",
  ],
  [
    "What if a device has no WebGPU?",
    "Support comes from react-native-webgpu. On a device where it can't get a GPU adapter the orb stays blank. A built-in fallback isn't part of the library yet.",
  ],
  [
    "Is it fast?",
    "These are ray-marched shaders and they are not free. On the test phone they run near 55 fps at 0.75x resolution. Heavier orbs need a lower quality or a 30 fps cap.",
  ],
];

export default function Landing() {
  return (
    <main className="landing">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: abs("/"),
            description: site.description,
            inLanguage: "en",
            publisher: { "@type": "Person", name: site.author.name, url: site.author.url },
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: site.pkg,
            description: site.description,
            codeRepository: site.repo,
            programmingLanguage: "TypeScript",
            runtimePlatform: "React Native, Expo",
            keywords: keywords.join(", "),
            url: abs("/"),
            license: "https://opensource.org/license/mit",
            author: { "@type": "Person", name: site.author.name, url: site.author.url },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqText.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
          },
        ]}
      />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Badge variant="outline" className="h-7 px-3 text-[0.72rem] tracking-wide">
              <SparklesIcon data-icon="inline-start" />
              {site.tagline}
            </Badge>
          </p>
          <h1>
            <span className="grad">Living light</span> for your React&nbsp;Native&nbsp;app.
          </h1>
          <p className="lead">
            33 GPU-rendered shader orbs as drop-in components. Tune them live, let them react to touch, and let adaptive
            quality keep them smooth. Built for voice and AI interfaces.
          </p>
          <div className="install">
            <code>{install}</code>
            <CopyButton text={install} />
          </div>
          <div className="cta">
            <Button asChild size="lg">
              <Link href="/docs/quick-start/">
                Get started
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/playground/">Open the playground</Link>
            </Button>
          </div>
          <ul className="proof" aria-label="Highlights">
            <li>Open source</li>
            <li>TypeScript</li>
            <li>Agent-ready</li>
            <li>Alpha</li>
          </ul>
          {!site.published && <p className="fine">Pre-release. The package name is a placeholder and it isn't on npm yet.</p>}
        </div>
        <HeroOrb />
      </section>

      <section className="stats" aria-label="At a glance">
        <div>
          <strong>{orbMeta.length}</strong>
          <span>shader orbs</span>
        </div>
        <div>
          <strong>{maxParams}</strong>
          <span>live params, up to</span>
        </div>
        <div>
          <strong>3</strong>
          <span>moods per orb</span>
        </div>
        <div>
          <strong>~55 fps</strong>
          <span>on a mid-range Android phone, at 0.75x</span>
        </div>
      </section>

      <div className="stack" aria-label="Built on">
        <span>Built on</span>
        {stack.map((t) => (
          <b key={t}>{t}</b>
        ))}
      </div>

      <section className="section">
        <p className="kicker">Features</p>
        <h2>Everything an orb needs, nothing it doesn't</h2>
        <div className="bento">
          {features.map(({ icon: Icon, title, text, span }) => (
            <article key={title} className="feature" style={{ "--span": span } as React.CSSProperties}>
              <span className="feature-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <p className="kicker">One component</p>
            <h2>Import an orb. Render it.</h2>
            <p>
              Props update the orb live without re-mounting it, and anything you don't set falls back to the orb's own
              defaults and its mood presets.
            </p>
            <p>
              <Link href="/docs/shader-orb/">Read the ShaderOrb reference →</Link>
            </p>
          </div>
          <CodeBlock code={usageExample} lang="typescript" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Gallery</p>
            <h2>Pick an orb</h2>
          </div>
          <Link href="/docs/components/orbs/">See all {orbMeta.length} →</Link>
        </div>
        <div className="grid grid-4">
          {orbMeta.slice(0, 12).map((o) => (
            <OrbCard key={o.slug} orb={o} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="agent">
          <div className="agent-copy">
            <p className="kicker">
              <BotIcon aria-hidden="true" /> Built for AI agents
            </p>
            <h2>Your coding assistant won't guess a parameter again.</h2>
            <p>
              Parameter names and ranges differ for every orb, and a wrong guess gives you a black orb. One command gives
              Claude Code, Cursor, Copilot and Codex an MCP server, a skill and instructions that look the real values up.
            </p>
            <p>
              <Link href="/docs/mcp/">MCP server and skills →</Link>
            </p>
          </div>
          <div className="agent-code">
            <CodeBlock code="npx react-native-shader-orbs-mcp init" lang="bash" />
            <ul>
              <li>MCP config for Claude Code, Cursor and VS Code</li>
              <li>A Claude Code skill and an AGENTS.md block</li>
              <li>
                <a href={abs("/llms.txt")}>llms.txt</a> and a full-text export for browsing agents
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="kicker">How it works</p>
        <h2>Compiled shaders, one tiny renderer</h2>
        <ol className="how">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="how-n">{i + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          <Link href="/docs/how-it-works/">Read how it works →</Link>
        </p>
      </section>

      <section className="section">
        <p className="kicker">Before you start</p>
        <h2>What it needs</h2>
        <div className="reqgrid">
          {reqs.map(({ icon: Icon, title, text }) => (
            <article key={title} className="req">
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">FAQ</p>
        <h2>Questions</h2>
        <Accordion type="single" collapsible className="faq">
          {faq.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="section">
        <div className="final">
          <h2>Put something alive on screen.</h2>
          <p>Install it, render an orb, and tune it live in the playground.</p>
          <div className="cta">
            <Button asChild size="lg">
              <Link href="/docs/installation/">
                Install
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/playground/">Open the playground</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

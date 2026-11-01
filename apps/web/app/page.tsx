import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";
import { HeroOrb } from "@/components/hero-orb";
import { OrbCard } from "@/components/orb-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { maxParams, orbMeta } from "@/lib/orbs";
import { install, site } from "@/lib/site";

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

const features: [string, string][] = [
  ["Drop-in component", "One import and one JSX element. Pick an orb, set a size, done."],
  [
    "Live parameters",
    `Each orb exposes its own typed, range-checked knobs (up to ${maxParams}). Changes ease in with springs, so nothing snaps.`,
  ],
  ["Reacts to touch", "A tap sends a pulse through the orb. Holding makes it swell and speed up, then it eases back on release."],
  [
    "Adaptive quality",
    "Auto mode renders at a lower resolution and steps it down when the frame rate drops. A frame cap saves battery.",
  ],
  ["Three moods", "Every orb ships idle, thinking and speaking presets, plus input and output volume to drive it from audio."],
  [
    "The same shaders on the web",
    "The orbs on this page are the same WGSL, driven by the same code, rendered through the browser's WebGPU.",
  ],
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

export default function Landing() {
  return (
    <main className="landing">
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
            GPU-rendered shader orbs as drop-in components. Tune them live, let them react to touch, and let adaptive
            quality keep them smooth.
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

      <section className="section">
        <h2>Everything an orb needs, nothing it doesn't</h2>
        <div className="features">
          {features.map(([title, text]) => (
            <Card key={title} className="feature">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{text}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <h2>One component</h2>
            <p>
              Import an orb, render it. Props update the orb live without re-mounting it, and anything you don't set falls
              back to the orb's own defaults and its mood presets.
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
          <h2>Pick an orb</h2>
          <Link href="/docs/components/orbs/">See all {orbMeta.length} →</Link>
        </div>
        <div className="grid grid-4">
          {orbMeta.slice(0, 12).map((o) => (
            <OrbCard key={o.slug} orb={o} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>How it works</h2>
        <ol className="steps">
          <li>
            <strong>Compile once.</strong> The shaders are written in TypeGPU. A codegen step resolves each one to plain
            WGSL plus its parameter metadata.
          </li>
          <li>
            <strong>Render with raw WebGPU.</strong> At runtime a fullscreen triangle and one uniform buffer go through{" "}
            <code>react-native-webgpu</code>. All orbs share one GPU device and cached pipelines.
          </li>
          <li>
            <strong>Drive it from props.</strong> Springs ease every value toward its target, so changing a prop is smooth
            and doesn't rebuild anything.
          </li>
        </ol>
        <p>
          <Link href="/docs/how-it-works/">Read how it works →</Link>
        </p>
      </section>

      <section className="section">
        <h2>Before you start</h2>
        <ul className="reqs">
          <li>
            <strong>Development build required.</strong> Expo Go can't load the native WebGPU module.
          </li>
          <li>
            <strong>Peer packages:</strong> <code>react-native-webgpu</code>, <code>react-native-reanimated</code>,{" "}
            <code>react-native-worklets</code>.
          </li>
          <li>
            <strong>Tested on Android</strong> (one physical device, React Native 0.88, Expo SDK 58). iOS is untested.
          </li>
          <li>
            <strong>Shaders are non-commercial</strong> unless you get XorDev's permission.{" "}
            <Link href="/docs/licensing/">Details</Link>.
          </li>
        </ul>
      </section>

      <section className="section">
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
    </main>
  );
}

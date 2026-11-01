import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getOrb, orbs } from "@/lib/orbs";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

// One 1200x630 card per orb, plus the default: /og/default.png, /og/orb-01.png
export const generateStaticParams = () => [{ name: "default.png" }, ...orbs.map((o) => ({ name: `${o.slug}.png` }))];

const bg = "#0b0b10";

/** A stand-in for the orb: layered gradients, since the real shader can't run while the card is rendered. */
const Orb = ({ hue, size }: { hue: number; size: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size,
      display: "flex",
      background: `radial-gradient(circle at 32% 28%, hsl(${hue + 30} 95% 78%) 0%, hsl(${hue} 85% 58%) 28%, hsl(${(hue + 70) % 360} 80% 40%) 58%, hsl(${(hue + 140) % 360} 70% 16%) 100%)`,
      boxShadow: `0 0 ${size * 0.35}px hsla(${hue} 90% 60% / 0.45), inset -${size * 0.08}px -${size * 0.1}px ${size * 0.2}px hsla(${(hue + 200) % 360} 80% 20% / 0.55)`,
    }}
  />
);

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const slug = name.replace(/\.png$/, "");
  const orb = slug === "default" ? undefined : getOrb(slug);
  if (slug !== "default" && !orb) {
    notFound();
  }
  const index = orb ? orbs.findIndex((o) => o.slug === orb.slug) : 0;
  const hue = (250 + index * 37) % 360;

  const title = orb ? orb.title : "Shader orbs for React Native";
  const sub = orb ? `${orb.note.charAt(0).toUpperCase()}${orb.note.slice(1)}` : "33 WebGPU shader orbs as drop-in components for React Native and Expo.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `radial-gradient(ellipse at 85% 40%, hsla(${hue} 80% 40% / 0.35), transparent 60%), ${bg}`,
          color: "#fff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 40 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#b9b9c8", letterSpacing: 1 }}>
            <div style={{ display: "flex", width: 18, height: 18, borderRadius: 18, marginRight: 14, background: `hsl(${hue} 85% 62%)` }} />
            {site.name.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: orb ? 104 : 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
            <div style={{ display: "flex", fontSize: 34, color: "#b9b9c8", marginTop: 24, lineHeight: 1.3, maxWidth: 640 }}>{sub}</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8f8fa3" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 420 }}>
          <Orb hue={hue} size={380} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

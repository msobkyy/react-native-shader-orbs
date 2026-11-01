import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="landing" style={{ padding: "6rem 1.25rem", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p className="lead" style={{ margin: "0 auto 1.5rem" }}>
        That page doesn't exist. Try the docs or the orb gallery.
      </p>
      <div className="cta" style={{ justifyContent: "center" }}>
        <Button asChild>
          <Link href="/docs/">Docs</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/docs/components/orbs/">All orbs</Link>
        </Button>
      </div>
    </main>
  );
}

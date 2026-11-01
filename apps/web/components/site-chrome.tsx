import Link from "next/link";
import { buildSearchIndex } from "@/lib/search";
import { abs, site } from "@/lib/site";
import { GithubLink } from "./github-link";
import { MobileMenu } from "./mobile-menu";
import { ResourcesMenu, type ResourceLink } from "./resources-menu";
import { SearchDialog } from "./search-dialog";
import { ThemeToggle } from "./theme-toggle";

export const mainLinks = [
  { href: "/docs/", label: "Docs" },
  { href: "/docs/components/orbs/", label: "Orbs" },
  { href: "/playground/", label: "Playground" },
];

/** Machine-readable files and the pages that explain them. `abs()` keeps the file links correct under a base path. */
export const resources: ResourceLink[] = [
  { label: "Registry", href: "/docs/registry/", hint: "Every orb as JSON, for tools" },
  { label: "MCP server", href: "/docs/mcp/", hint: "Let an AI assistant look up orbs" },
  { label: "llms.txt", href: abs("/llms.txt"), hint: "Docs index for AI assistants", file: true },
  { label: "Changelog", href: "/docs/changelog/", hint: "What's in each release" },
];

export function SiteNav() {
  return (
    <>
      <header className="site-nav">
        <div className="site-nav-inner">
          <MobileMenu links={[...mainLinks, ...resources.map((r) => ({ href: r.href, label: r.label, file: r.file }))]} />
          <Link className="brand" href="/">
            <span className="brand-orb" aria-hidden="true" />
            {site.name}
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            {site.repo && <a href={site.repo}>GitHub</a>}
          </nav>
          <ResourcesMenu items={resources} />
          <span className="nav-spacer" />
          <SearchDialog
            entries={buildSearchIndex()}
            files={[
              { title: "llms.txt", href: abs("/llms.txt") },
              { title: "Orb catalog (registry.json)", href: abs("/r/registry.json") },
            ]}
          />
          <GithubLink />
          <ThemeToggle />
        </div>
      </header>
      {!site.published && (
        <div className="banner">
          Pre-release: <code>{site.pkg}</code> is a placeholder name and is not on npm yet.
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div>
          <strong>{site.name}</strong>
          <p>
            Library code is MIT. The shaders are by <a href="https://x.com/XorDev">XorDev</a>, used with permission, for
            non-commercial use with attribution. See <Link href="/docs/licensing/">Licensing and credits</Link>.
          </p>
          <p>
            React Native port by <a href={site.author.url}>{site.author.handle}</a>. Derived from{" "}
            <a href="https://github.com/shadcn-labs/shadercn">shadercn</a>; not affiliated with or endorsed by it.
          </p>
        </div>
        <div className="foot-cols">
          <div className="foot-links">
            <span>Product</span>
            <Link href="/docs/">Docs</Link>
            <Link href="/docs/installation/">Installation</Link>
            <Link href="/docs/components/orbs/">All orbs</Link>
            <Link href="/playground/">Playground</Link>
          </div>
          <div className="foot-links">
            <span>Resources</span>
            {resources.map((r) =>
              r.file ? (
                <a key={r.label} href={r.href}>
                  {r.label}
                </a>
              ) : (
                <Link key={r.label} href={r.href}>
                  {r.label}
                </Link>
              )
            )}
            <Link href="/docs/licensing/">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

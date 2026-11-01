import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { CopyDelegate } from "@/components/copy-delegate";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { keywords, ogImage } from "@/lib/seo";
import { abs, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords,
  authors: [{ name: site.author.name, url: site.author.url }],
  creator: site.author.name,
  publisher: site.author.name,
  category: "technology",
  alternates: { canonical: abs("/") },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: abs("/"),
    locale: "en_US",
    images: [ogImage()],
  },
  twitter: {
    card: "summary_large_image",
    site: site.author.handle,
    creator: site.author.handle,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    images: [ogImage().url],
  },
  icons: { icon: "/icon.svg" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e12" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class on <html> before React hydrates.
    <html lang="en" data-pkg={site.pkg} className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <SiteNav />
            {children}
            <SiteFooter />
            <CopyDelegate />
            <Toaster position="bottom-right" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

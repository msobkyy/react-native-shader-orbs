import { buildSearchIndex } from "@/lib/search";

export const dynamic = "force-static";

// The command palette fetches this the first time it is used, instead of every page carrying a copy.
export function GET() {
  return Response.json(buildSearchIndex());
}

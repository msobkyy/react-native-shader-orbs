import { buildRegistry } from "@/lib/registry";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildRegistry());
}

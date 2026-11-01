import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/** Tabs over content rendered on the server (code blocks arrive highlighted, as children). */
export function CodeTabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  return (
    <Tabs defaultValue={tabs[0].label} className="my-4">
      <TabsList>
        {tabs.map((t) => (
          <TabsTrigger key={t.label} value={t.label}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((t) => (
        <TabsContent key={t.label} value={t.label}>
          {t.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

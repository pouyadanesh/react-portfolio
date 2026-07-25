"use client";

import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";
import { ThemePreview } from "./theme-preview";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Laptop,
  },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Appearance</h2>

        <p className="text-sm text-muted-foreground">
          Choose how AI Team Workspace looks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {themes.map((item) => {
          const Icon = item.icon;
          const active = theme === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setTheme(item.value)}
              className={cn(
                "group rounded-xl border bg-card p-3 text-left transition-all",
                active
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/40 hover:shadow-md"
              )}
            >
              <ThemePreview type={item.value} />

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </div>

                {active && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
import { cn } from "../../lib/utils";

interface ThemePreviewProps {
  type: "light" | "dark" | "system";
}

export function ThemePreview({ type }: ThemePreviewProps) {
  const isDark = type === "dark";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border",
        isDark
          ? "border-zinc-700 bg-zinc-950"
          : "border-zinc-200 bg-white"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "h-4",
          isDark ? "bg-zinc-800" : "bg-zinc-100"
        )}
      />

      <div className="flex h-28">
        {/* Sidebar */}
        <div
          className={cn(
            "w-8",
            isDark ? "bg-zinc-900" : "bg-zinc-50"
          )}
        />

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div
            className={cn(
              "h-2 w-2/3 rounded-full",
              isDark ? "bg-zinc-700" : "bg-zinc-300"
            )}
          />

          <div
            className={cn(
              "h-12 rounded-md",
              isDark ? "bg-zinc-900" : "bg-zinc-100"
            )}
          />

          <div className="flex gap-2">
            <div className="h-2 w-10 rounded-full bg-primary" />

            <div
              className={cn(
                "h-2 w-8 rounded-full",
                isDark ? "bg-zinc-700" : "bg-zinc-200"
              )}
            />
          </div>
        </div>
      </div>

      {type === "system" && (
        <div className="flex h-28">
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-zinc-950" />
        </div>
      )}
    </div>
  );
}
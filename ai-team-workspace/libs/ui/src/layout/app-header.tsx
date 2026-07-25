import { Bell, ChevronDown, Command, Plus, Search } from "lucide-react";

export function AppHeader() {
  return (
     <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      {/* Search */}
      <div className="max-w-xl flex-1">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            placeholder="Search projects, tasks, people..."
            className="
              h-10
              w-full
              rounded-lg
              border
              border-input
              bg-card
              pl-10
              pr-16
              text-sm
              text-foreground
              placeholder:text-muted-foreground
              outline-none
              transition-colors
              focus:border-primary
              focus:ring-2
              focus:ring-ring/20
            "
          />

          <div
            className="
              absolute
              right-3
              top-1/2
              flex
              -translate-y-1/2
              items-center
              gap-1
              rounded-md
              border
              border-border
              bg-background
              px-2
              py-1
              text-[11px]
              text-muted-foreground
            "
          >
            <Command className="h-3 w-3" />
            K
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="ml-6 flex items-center gap-2">
        <button
          className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-muted-foreground
            transition-colors
            hover:bg-accent
            hover:text-foreground
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
          "
        >
          <Bell className="h-5 w-5" />
        </button>

        <button
          className="
            inline-flex
            h-10
            items-center
            gap-3
            rounded-lg
            border
            border-border
            bg-card
            px-3
            transition-colors
            hover:bg-accent
          "
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            PD
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-foreground">
              Pouya Danesh
            </p>

            <p className="text-xs text-muted-foreground">
              Owner
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}

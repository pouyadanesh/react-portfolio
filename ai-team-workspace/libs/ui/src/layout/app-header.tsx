import { Bell, Plus, Search } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-surface px-6">
      <div className="max-w-lg flex-1">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search commands or chats..."
            className="w-full rounded-md bg-secondary py-1.5 pl-8 pr-14 text-sm outline-none ring-1 ring-border transition-shadow duration-200 placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </div>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-4">
        <button className="p-1.5 text-muted-foreground transition-colors hover:text-foreground">
          <Bell className="size-5" />
        </button>
        <button className="flex items-center gap-1.5 rounded-md bg-brand py-2 pl-2 pr-3 text-xs font-semibold text-brand-foreground ring-1 ring-brand/50 transition-colors hover:opacity-90">
          <Plus className="size-4 shrink-0" />
          New Project
        </button>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { Navigation } from '../navigation/navigation';
import { ChevronLeft, PanelLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const reverseCollapse = () => setCollapsed((v) => !v);
  return (
    <aside
      className={cn(
        "relative flex h-screen flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-300",
        collapsed ? "w-18" : "w-72"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-semibold">AI Team Workspace</span>
            <span className="text-xs text-muted-foreground">
              Productivity Hub
            </span>
          </div>
        )}

        <button
          onClick={reverseCollapse}
          className="
            inline-flex h-8 w-8 items-center justify-center
            rounded-md
            text-muted-foreground
            transition-colors
            hover:bg-sidebar-accent
            hover:text-foreground
          "
        >
          {collapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3">
        <Navigation collapsed={collapsed} />
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3">
        {!collapsed ? (
          <div className="text-xs text-muted-foreground">
            AI Team Workspace
          </div>
        ) : null}
      </div>
    </aside>
  );
}

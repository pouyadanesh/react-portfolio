"use client";

import { navigationItems } from "./navigation-config";
import { NavigationItem } from "./navigation-item";

export function Navigation({collapsed}: {collapsed: boolean}) {
  return (
    <nav className="flex flex-col gap-1">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.href}
          item={item}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
}
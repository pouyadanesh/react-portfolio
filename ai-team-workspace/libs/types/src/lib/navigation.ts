import type { LucideIcon } from "lucide-react";

export interface SidebarNavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  children?: SidebarNavigationItem[];
  badge?: string;
  disabled?: boolean;
}
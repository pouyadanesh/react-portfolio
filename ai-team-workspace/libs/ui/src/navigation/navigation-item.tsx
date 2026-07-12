'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { SidebarNavigationItem as NavigationItemType } from '@ai-team-workspace/types';

interface Props {
  item: NavigationItemType;
  collapsed: boolean;
}

export function NavigationItem({ item, collapsed }: Props) {
  const pathname = usePathname();
  const Icon = item.icon;

  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`
        flex items-center justify-start gap-3 rounded-md px-3 py-2 text-sm
        ${active ? 'bg-[#34bbccc2]' : 'hover:bg-accent'}
      `}
    >
      <Icon className="h-4 w-4" />

      {!collapsed && <span>{item.title}</span>}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, LayoutDashboard, MessageSquare, Settings, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectNavigationProps {
  projectId: string;
}

export function ProjectNavigation({
  projectId,
}: ProjectNavigationProps) {
  const pathname = usePathname();

  const navigation = [
    {
      title: 'Overview',
      href: `/projects/${projectId}`,
      icon: LayoutDashboard,
    },
    {
      title: 'Chats',
      href: `/projects/${projectId}/chats`,
      icon: MessageSquare,
    },
    {
      title: 'Prompts',
      href: `/projects/${projectId}/prompts`,
      icon: Sparkles,
    },
    {
      title: 'Knowledge',
      href: `/projects/${projectId}/knowledge`,
      icon: BookOpen,
    },
    {
      title: 'Settings',
      href: `/projects/${projectId}/settings`,
      icon: Settings,
    },
  ];

  return (
    <nav className="border-b">
      <div className="flex gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative flex items-center gap-2 px-3 py-3 text-sm font-medium',
                'text-muted-foreground transition-colors',
                'hover:text-foreground',
                isActive && 'text-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}

              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
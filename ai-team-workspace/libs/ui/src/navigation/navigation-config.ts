import type { SidebarNavigationItem } from '@ai-team-workspace/types';
import {
  BookOpen,
  FolderKanban,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sparkles,
} from 'lucide-react';

export const navigationItems: SidebarNavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: FolderKanban,
  },
  {
    title: 'AI Chats',
    href: '/chat',
    icon: MessageSquare,
  },
  {
    title: 'Prompt Library',
    href: '/prompts',
    icon: Sparkles,
  },
  {
    title: 'Knowledge',
    href: '/knowledge',
    icon: BookOpen,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

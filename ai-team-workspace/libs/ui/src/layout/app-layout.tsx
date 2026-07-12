import { AppHeader } from './app-header';
import { AppSidebar } from './app-sidebar';
import { AppContent } from './app-content';

type AppLayoutProps = React.PropsWithChildren<{
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}>;

export function AppLayout({
  children,
  sidebar = <AppSidebar />,
  header = <AppHeader />,
}: AppLayoutProps) {
  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      {sidebar}

      <div className="flex min-w-0 flex-1 flex-col">
        {header}

        <AppContent>{children}</AppContent>
      </div>
    </div>
  );
}

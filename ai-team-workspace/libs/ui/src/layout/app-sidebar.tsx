'use client';

import { useState } from 'react';
import { Navigation } from '../navigation/navigation';
import { ChevronLeft, Maximize } from 'lucide-react';

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const reverseCollapse = () => setCollapsed((v) => !v);
  return (
    <aside className={`border-r transition-all duration-300`}>
      {collapsed ? (
        <Maximize onClick={reverseCollapse} />
      ) : (
        <ChevronLeft onClick={reverseCollapse} />
      )}

      <Navigation collapsed={collapsed} />
    </aside>
  );
}

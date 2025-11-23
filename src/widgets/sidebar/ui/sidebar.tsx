import { Link, useLocation } from 'react-router-dom';
import { Button } from '@shared/ui';
import { cn } from '@shared/lib/utils';
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Settings,
  PieChart,
  X,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: TrendingUp, label: 'Аналитика', path: '/dashboard/analytics' },
  { icon: Wallet, label: 'Портфель', path: '/dashboard/portfolio' },
  { icon: PieChart, label: 'Инвестиции', path: '/dashboard/investments' },
  { icon: Settings, label: 'Настройки', path: '/dashboard/settings' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-56 sm:w-64 border-r bg-background transition-transform duration-300',
          'md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] lg:top-16 lg:h-[calc(100vh-4rem)]',
          'flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b md:hidden">
          <span className="font-semibold text-base sm:text-lg">Меню</span>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 sm:h-9 sm:w-9">
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => onClose()}
                className={cn(
                  'flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground'
                )}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-3 sm:p-4 border-t">
          <div className="text-xs sm:text-sm text-muted-foreground text-center">
            v1.0.0
          </div>
        </div>
      </aside>
    </>
  );
}


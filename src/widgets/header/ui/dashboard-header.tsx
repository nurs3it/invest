import { useAppSelector } from '@app/store/hooks';
import { selectCurrentUser } from '@entities/user';
import { Button } from '@shared/ui';
import { ThemeDropdown } from '@widgets/theme-switcher';
import {
  Bell,
  Search,
  User,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { SidebarTrigger } from '@shared/ui';

export function DashboardHeader() {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold leading-none">Investment App</span>
              <span className="text-xs text-muted-foreground">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Поиск..."
              className="w-full h-9 rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
          </Button>

          {/* Theme Switcher */}
          <div className="hidden sm:block">
            <ThemeDropdown />
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-sm font-medium leading-none">
                {currentUser?.name || 'Пользователь'}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentUser?.email || 'user@example.com'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10"
              >
                <User className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


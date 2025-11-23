import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@shared/ui';
import { cn } from '@shared/lib/utils';
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Settings,
  PieChart,
  Sparkles,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: TrendingUp, label: 'Аналитика', path: '/dashboard/analytics' },
  { icon: Wallet, label: 'Портфель', path: '/dashboard/portfolio' },
  { icon: PieChart, label: 'Инвестиции', path: '/dashboard/investments' },
  { icon: Settings, label: 'Настройки', path: '/dashboard/settings' },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Investment App</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link to={item.path}>
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="px-2 py-2 text-xs text-muted-foreground text-center group-data-[collapsible=icon]:hidden">
          v1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}


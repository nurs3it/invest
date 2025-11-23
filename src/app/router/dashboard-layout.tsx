import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@shared/ui';
import { AppSidebar } from '@widgets/sidebar';
import { DashboardHeader } from '@widgets/header';

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6 md:p-8">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


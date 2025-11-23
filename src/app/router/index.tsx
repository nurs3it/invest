import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { DashboardLayout } from './dashboard-layout';

const HomePage = lazy(() =>
  import('@pages/home').then((module) => ({ default: module.HomePage }))
);
const DashboardPage = lazy(() =>
  import('@pages/dashboard').then((module) => ({ default: module.DashboardPage }))
);
const LoginPage = lazy(() =>
  import('@pages/login').then((module) => ({ default: module.LoginPage }))
);
const UIPage = lazy(() => import('@pages/ui').then((module) => ({ default: module.UIPage })));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="ui" element={<UIPage />} />
      </Route>

      {/* Auth routes without layout */}
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard routes with own layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="analytics" element={<DashboardPage />} />
        <Route path="portfolio" element={<DashboardPage />} />
        <Route path="investments" element={<DashboardPage />} />
        <Route path="settings" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}


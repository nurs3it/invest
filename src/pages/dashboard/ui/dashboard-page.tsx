import { useState } from 'react';
import { useAppSelector } from '@app/store/hooks';
import { selectCurrentUser } from '@entities/user';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@shared/ui';
import { Header } from '@widgets/header';
import { Sidebar } from '@widgets/sidebar';
import { TrendingUp, Wallet, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentUser = useAppSelector(selectCurrentUser);

  const stats = [
    {
      title: 'Общий баланс',
      value: '$124,592',
      change: '+12.5%',
      trend: 'up',
      icon: Wallet,
    },
    {
      title: 'Прибыль',
      value: '$24,592',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Активные позиции',
      value: '156',
      change: '+23',
      trend: 'up',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} showMenuButton />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">
                Добро пожаловать{currentUser ? `, ${currentUser.name}` : ''}!
              </h1>
              <p className="text-muted-foreground text-xl">
                Ваш портфель растёт и приносит прибыль
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-base font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <Icon className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{stat.value}</div>
                      <div
                        className={`flex items-center gap-1 text-base mt-2 ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="h-5 w-5" />
                        ) : (
                          <ArrowDownRight className="h-5 w-5" />
                        )}
                        <span className="font-medium">{stat.change}</span>
                        <span className="text-muted-foreground">от прошлого месяца</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Динамика портфеля</CardTitle>
                  <CardDescription>Изменение стоимости за последние 30 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">График будет здесь</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Распределение активов</CardTitle>
                  <CardDescription>Процентное соотношение инвестиций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Диаграмма будет здесь</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
                <CardDescription>Ваши недавние транзакции и операции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                      <div>
                        <p className="font-medium text-base">Покупка акций</p>
                        <p className="text-base text-muted-foreground">2 часа назад</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">+$1,250</p>
                      <p className="text-base text-green-600">+2.5%</p>
                    </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

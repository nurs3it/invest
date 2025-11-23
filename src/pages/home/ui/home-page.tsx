import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from '@shared/ui';
import {
  Sparkles,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  ArrowRight,
  Star,
  Wallet,
  PieChart,
  Bell,
  Target,
  Award,
} from 'lucide-react';

export function HomePage() {
  const stats = [
    { value: '10K+', label: 'Активных пользователей', icon: Users },
    { value: '$50M+', label: 'Управляемых активов', icon: Wallet },
    { value: '99.9%', label: 'Время работы', icon: Shield },
    { value: '4.9/5', label: 'Рейтинг', icon: Star },
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'Аналитика в реальном времени',
      description:
        'Отслеживайте свои инвестиции с помощью детальной аналитики и графиков',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description:
        'Ваши данные защищены современными методами шифрования и двухфакторной аутентификацией',
    },
    {
      icon: Zap,
      title: 'Быстрые транзакции',
      description:
        'Мгновенное выполнение операций с минимальными комиссиями',
    },
    {
      icon: PieChart,
      title: 'Диверсификация портфеля',
      description:
        'Умные инструменты для распределения активов и управления рисками',
    },
    {
      icon: Bell,
      title: 'Умные уведомления',
      description:
        'Получайте важные обновления о ваших инвестициях в нужный момент',
    },
    {
      icon: Globe,
      title: 'Глобальный доступ',
      description:
        'Управляйте инвестициями из любой точки мира с любого устройства',
    },
  ];

  const steps = [
      {
        number: '01',
        title: 'Регистрация',
        description: 'Создайте аккаунт за несколько минут',
        icon: Users,
      },
    {
      number: '02',
      title: 'Пополнение',
      description: 'Пополните баланс удобным способом',
      icon: Wallet,
    },
    {
      number: '03',
      title: 'Инвестирование',
      description: 'Выберите активы и начните инвестировать',
      icon: Target,
    },
    {
      number: '04',
      title: 'Мониторинг',
      description: 'Отслеживайте рост вашего портфеля',
      icon: TrendingUp,
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Инвестор',
      content:
        'Отличная платформа! Удобный интерфейс и все необходимые инструменты для управления инвестициями.',
      rating: 5,
    },
    {
      name: 'Мария Иванова',
      role: 'Трейдер',
      content:
        'Использую уже полгода. Очень довольна аналитикой и скоростью выполнения операций.',
      rating: 5,
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Предприниматель',
      content:
        'Помогла диверсифицировать портфель и увеличить доходность. Рекомендую!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10" />
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Новое поколение инвестиций</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Управляйте инвестициями
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              с умом
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Современная платформа для управления инвестициями с мощной аналитикой,
            безопасностью и удобным интерфейсом
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 text-base px-8 h-12 group">
                <Rocket className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
                Начать работу
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12">
                Войти в аккаунт
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для успешного управления инвестициями в одном месте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните инвестировать всего за 4 простых шага
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">
                              {step.number}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="mb-2">
                            <Icon className="h-5 w-5 text-primary mb-2" />
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2 z-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тысячи довольных пользователей уже используют нашу платформу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
            <CardContent className="pt-12 pb-12 px-8 md:px-16 text-center relative z-10">
              <div className="mb-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы начать инвестировать?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Присоединяйтесь к тысячам инвесторов, которые уже используют нашу
                  платформу для управления своими активами
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login">
                  <Button size="lg" className="gap-2 text-base px-8 h-12 group">
                    Создать аккаунт
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12">
                    Посмотреть демо
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Marquee,
} from '@shared/ui';
import { cn } from '@shared/lib/utils';
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
      username: '@alex_petrov',
      role: 'Инвестор',
      content:
        'Отличная платформа! Удобный интерфейс и все необходимые инструменты для управления инвестициями.',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey',
    },
    {
      name: 'Мария Иванова',
      username: '@maria_ivanova',
      role: 'Трейдер',
      content:
        'Использую уже полгода. Очень довольна аналитикой и скоростью выполнения операций.',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    },
    {
      name: 'Дмитрий Сидоров',
      username: '@dmitry_sidorov',
      role: 'Предприниматель',
      content:
        'Помогла диверсифицировать портфель и увеличить доходность. Рекомендую!',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
    },
    {
      name: 'Елена Козлова',
      username: '@elena_kozlova',
      role: 'Финансовый аналитик',
      content:
        'Профессиональные инструменты для анализа рынка. Платформа превзошла все ожидания!',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    },
    {
      name: 'Иван Смирнов',
      username: '@ivan_smirnov',
      role: 'Инвестор',
      content:
        'Безопасность на высшем уровне. Чувствую себя уверенно, доверяя свои средства этой платформе.',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan',
    },
    {
      name: 'Ольга Новикова',
      username: '@olga_novikova',
      role: 'Трейдер',
      content:
        'Отличная поддержка клиентов и быстрая реакция на запросы. Очень довольна сервисом!',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olga',
    },
    {
      name: 'Сергей Волков',
      username: '@sergey_volkov',
      role: 'Предприниматель',
      content:
        'Интуитивно понятный интерфейс. Начал использовать сразу без обучения. Отлично!',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sergey',
    },
    {
      name: 'Анна Морозова',
      username: '@anna_morozova',
      role: 'Инвестор',
      content:
        'Регулярные обновления и новые функции. Платформа постоянно развивается. Супер!',
      rating: 5,
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    },
  ];

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    rating,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    rating: number;
  }) => {
    return (
      <figure
        className={cn(
          'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
          'border-border bg-card hover:bg-accent/50 transition-colors'
        )}
      >
        <div className="flex flex-row items-center gap-2 mb-3">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium">{name}</figcaption>
            <p className="text-xs text-muted-foreground">{username}</p>
          </div>
        </div>
        <div className="flex gap-1 mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-primary text-primary"
            />
          ))}
        </div>
        <blockquote className="text-sm text-muted-foreground leading-relaxed">
          "{body}"
        </blockquote>
      </figure>
    );
  };

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
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи довольных пользователей уже используют нашу платформу
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                img={review.img}
                name={review.name}
                username={review.username}
                body={review.content}
                rating={review.rating}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                img={review.img}
                name={review.name}
                username={review.username}
                body={review.content}
                rating={review.rating}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
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

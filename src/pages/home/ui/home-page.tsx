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
          'relative h-full w-56 sm:w-64 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4',
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
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10" />
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-2 sm:mb-4">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium">Новое поколение инвестиций</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent px-2">
            Управляйте инвестициями
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              с умом
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Современная платформа для управления инвестициями с мощной аналитикой,
            безопасностью и удобным интерфейсом
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-2">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto group">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-[-2px] transition-transform" />
                Начать работу
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto">
                Войти в аккаунт
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative h-full rounded-3xl border-2 border-border/50 bg-card/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-1">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 text-center">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          {/* Outer Glow Ring */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Icon Background */}
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                            
                            {/* Decorative Dots */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                          </div>
                        </div>
                      </div>

                      {/* Stat Value */}
                      <div className="mb-3">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground via-foreground/90 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/70 transition-all duration-500">
                          {stat.value}
                        </div>
                      </div>

                      {/* Stat Label */}
                      <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-tight group-hover:text-foreground/80 transition-colors">
                        {stat.label}
                      </div>

                      {/* Decorative Line */}
                      <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Decorative Text */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Доверяют тысячи инвесторов по всему миру
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-muted/30 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Преимущества</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для успешного управления инвестициями в одном месте
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = index === 0 || index === 3; // First and fourth cards are larger
              
              return (
                <div
                  key={index}
                  className={cn(
                    "group relative",
                    isLarge && "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative h-full rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="mb-6 relative">
                        {/* Icon Background with Gradient */}
                        <div className="relative inline-flex">
                          {/* Outer Glow Ring */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Icon Container */}
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                            
                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {feature.description}
                        </p>
                      </div>

                      {/* Decorative Line */}
                      <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Animated Border on Hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <span>И многое другое</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Как это работает
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Начните инвестировать всего за 4 простых шага
            </p>
          </div>

          {/* Stepper */}
          <div className="relative">
            {/* Horizontal Stepper for Desktop */}
            <div className="hidden lg:flex items-start justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center relative z-10 group">
                    {/* Step Circle */}
                    <div className="relative mb-6">
                      {/* Outer Glow Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main Circle */}
                      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg border-4 border-background group-hover:scale-110 transition-all duration-300">
                        {/* Inner Circle with Icon */}
                        <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md border-2 border-background">
                          <span className="text-sm font-bold text-background">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center max-w-[200px]">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Animated Arrow (except for last step) */}
                    {!isLast && (
                      <div className="absolute top-16 left-full w-1/2 h-0.5 flex items-center justify-end -translate-x-1/2 z-0">
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-l-primary/40 border-t-transparent border-b-transparent group-hover:border-l-primary transition-colors" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Vertical Stepper for Mobile/Tablet */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Vertical Line */}
                    {!isLast && (
                      <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-primary/40" />
                    )}

                    {/* Step Circle */}
                    <div className="relative flex-shrink-0">
                      {/* Outer Glow Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main Circle */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg border-4 border-background group-hover:scale-110 transition-all duration-300">
                        {/* Inner Circle with Icon */}
                        <div className="absolute inset-1.5 rounded-full bg-background flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md border-2 border-background">
                          <span className="text-xs font-bold text-background">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
            <CardContent className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
              <div className="mb-4 sm:mb-6">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Готовы начать инвестировать?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                  Присоединяйтесь к тысячам инвесторов, которые уже используют нашу
                  платформу для управления своими активами
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Link to="/login" className="w-full sm:w-auto">
                  <Button size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto group">
                    Создать аккаунт
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="gap-2 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto">
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

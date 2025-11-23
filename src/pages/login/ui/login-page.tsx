import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  PhoneInput,
  Label,
  Button,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@shared/ui';
import { useLogin } from '@features/auth';
import {
  LogIn,
  ArrowLeft,
  Mail,
  Lock,
  Phone,
  Shield,
  KeyRound,
} from 'lucide-react';

type AuthMethod = 'phone' | 'email' | 'ecp';

export function LoginPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate('/dashboard');
        },
      }
    );
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      // Очистка номера от маски для отправки
      const cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.length === 11) {
        setOtpSent(true);
      }
    } else {
      // Проверка OTP кода
      const cleanPhone = phone.replace(/\D/g, '');
      login(
        { email: cleanPhone, password: otpCode },
        {
          onSuccess: () => {
            navigate('/dashboard');
          },
        }
      );
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleECPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Интеграция с ncalayer НУЦ РК
    // Здесь будет логика работы с ЭЦП
    alert('Интеграция с ncalayer НУЦ РК будет реализована');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="w-full max-w-md space-y-4 sm:space-y-6 relative z-10">
        {/* Back button */}
        <Link to="/">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 text-xs sm:text-sm h-8 sm:h-9 hover:bg-background/80 backdrop-blur-sm border border-border/50"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Назад на главную</span>
            <span className="xs:hidden">Назад</span>
          </Button>
        </Link>

        {/* Login Card */}
        <Card className="border-2 border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur-xl opacity-50" />
          
          <CardHeader className="space-y-3 sm:space-y-4 text-center px-4 sm:px-6 pt-6 sm:pt-8 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="flex justify-center mb-2 relative z-10">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 animate-pulse" />
                
                {/* Icon Container */}
                <div className="relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20 shadow-lg">
                  <LogIn className="h-6 w-6 sm:h-8 sm:w-8 text-primary relative z-10" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
                </div>
              </div>
            </div>

            <CardTitle className="text-2xl sm:text-3xl relative z-10 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Добро пожаловать
            </CardTitle>

            <CardDescription className="text-sm sm:text-base relative z-10">
              Войдите в свой аккаунт для продолжения
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8 relative">
            <Tabs
              value={authMethod}
              onValueChange={(value) => {
                setAuthMethod(value as AuthMethod);
                setOtpSent(false);
                setOtpCode('');
              }}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6 h-10 sm:h-11 bg-muted/50 border border-border/50 rounded-xl p-1">
                <TabsTrigger 
                  value="phone" 
                  className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Телефон</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="email" 
                  className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                >
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Email</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ecp" 
                  className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                >
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">ЭЦП</span>
                </TabsTrigger>
              </TabsList>

              {/* Phone OTP Tab */}
              <TabsContent value="phone" className="space-y-4">
                <form onSubmit={handlePhoneSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="h-4 w-4 text-primary" />
                      Номер телефона
                    </Label>
                    <div className="relative">
                      <PhoneInput
                        id="phone"
                        placeholder="+7 (700) 123-45-67"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        disabled={otpSent}
                        className="h-11 border-2 focus:border-primary/50 transition-colors bg-background/50"
                      />
                      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  {otpSent && (
                    <div className="space-y-3 animate-in fade-in-0 slide-in-from-top-2 p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                      <Label htmlFor="otp" className="flex items-center gap-2 text-sm font-medium">
                        <KeyRound className="h-4 w-4 text-primary" />
                        Код подтверждения
                      </Label>
                      <div className="relative">
                        <Input
                          id="otp"
                          type="text"
                          placeholder="000000"
                          value={otpCode}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setOtpCode(value);
                          }}
                          required
                          maxLength={6}
                          inputMode="numeric"
                          pattern="[0-9]{6}"
                          className="h-12 text-center text-xl tracking-[0.5em] font-mono border-2 focus:border-primary/50 transition-colors bg-background"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Код отправлен на <span className="font-medium text-foreground">{phone}</span>
                      </p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setOtpSent(false);
                          setOtpCode('');
                        }}
                        className="w-full hover:bg-primary/10"
                      >
                        Изменить номер
                      </Button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={
                      isPending ||
                      (otpSent && otpCode.length !== 6) ||
                      (!otpSent && phone.replace(/\D/g, '').length !== 11)
                    }
                  >
                    {isPending ? (
                      <span>Проверка...</span>
                    ) : otpSent ? (
                      <>
                        <LogIn className="mr-2 h-5 w-5" />
                        <span>Подтвердить</span>
                      </>
                    ) : (
                      <>
                        <Phone className="mr-2 h-5 w-5" />
                        <span>Отправить код</span>
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Email/Password Tab */}
              <TabsContent value="email" className="space-y-4">
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        className="h-11 border-2 focus:border-primary/50 transition-colors bg-background/50"
                      />
                      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                    {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                      <p className="text-sm text-destructive animate-in fade-in-0">
                        Введите корректный email адрес
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2 text-sm font-medium">
                      <Lock className="h-4 w-4 text-primary" />
                      Пароль
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11 border-2 focus:border-primary/50 transition-colors bg-background/50"
                      />
                      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="rounded border-2 border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer" 
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Запомнить меня</span>
                    </label>
                    <a href="#" className="text-primary hover:underline font-medium transition-colors">
                      Забыли пароль?
                    </a>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span>Вход...</span>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-5 w-5" />
                        <span>Войти</span>
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* ECP Tab */}
              <TabsContent value="ecp" className="space-y-4">
                <div className="rounded-xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 p-6 sm:p-8 text-center space-y-4 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                  
                  <div className="flex justify-center relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 shadow-lg">
                        <Shield className="h-8 w-8 text-primary relative z-10" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Вход через ЭЦП НУЦ РК
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Используйте электронную цифровую подпись для безопасного входа
                    </p>
                  </div>
                </div>

                <form onSubmit={handleECPSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Интеграция с ncalayer
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Убедитесь, что у вас установлен ncalayer и подключена ЭЦП
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span>Подключение...</span>
                    ) : (
                      <>
                        <Shield className="mr-2 h-5 w-5" />
                        <span>Войти через ЭЦП</span>
                      </>
                    )}
                  </Button>
                </form>

                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 sm:p-5 space-y-3">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Требования:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Установленный ncalayer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Действительная ЭЦП НУЦ РК</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Подключенное устройство с сертификатом</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                Нет аккаунта?{' '}
                <a href="#" className="text-primary hover:underline font-semibold transition-colors">
                  Зарегистрироваться
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Info text */}
        <div className="text-center text-sm text-muted-foreground bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-3">
          <p>Для демонстрации можно использовать любые данные</p>
        </div>
      </div>
    </div>
  );
}

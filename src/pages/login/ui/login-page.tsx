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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад на главную
          </Button>
        </Link>

        {/* Login Card */}
        <Card>
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
            </div>

            <CardTitle className="text-3xl">Добро пожаловать</CardTitle>

            <CardDescription className="text-base">
              Войдите в свой аккаунт для продолжения
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs
              value={authMethod}
              onValueChange={(value) => {
                setAuthMethod(value as AuthMethod);
                setOtpSent(false);
                setOtpCode('');
              }}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="phone" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Телефон</span>
                </TabsTrigger>
                <TabsTrigger value="email" className="gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </TabsTrigger>
                <TabsTrigger value="ecp" className="gap-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">ЭЦП</span>
                </TabsTrigger>
              </TabsList>

              {/* Phone OTP Tab */}
              <TabsContent value="phone" className="space-y-4">
                <form onSubmit={handlePhoneSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Номер телефона
                    </Label>
                    <PhoneInput
                      id="phone"
                      placeholder="+7 (700) 123-45-67"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      disabled={otpSent}
                      className="h-11"
                    />
                  </div>

                  {otpSent && (
                    <div className="space-y-2 animate-in fade-in-0 slide-in-from-top-2">
                      <Label htmlFor="otp" className="flex items-center gap-2">
                        <KeyRound className="h-4 w-4" />
                        Код подтверждения
                      </Label>
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
                        className="h-11 text-center text-lg tracking-widest font-mono"
                      />
                      <p className="text-sm text-muted-foreground">
                        Код отправлен на {phone}
                      </p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setOtpSent(false);
                          setOtpCode('');
                        }}
                        className="w-full"
                      >
                        Изменить номер
                      </Button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-11"
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
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      className="h-11"
                    />
                    {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                      <p className="text-sm text-destructive">
                        Введите корректный email адрес
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Пароль
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-muted-foreground">Запомнить меня</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Забыли пароль?
                    </a>
                  </div>

                  <Button type="submit" className="w-full h-11" disabled={isPending}>
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
                <div className="rounded-lg border-2 border-dashed border-primary/20 bg-primary/5 p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
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

                  <Button type="submit" className="w-full h-11" disabled={isPending}>
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

                <div className="rounded-lg bg-muted p-4 space-y-2">
                  <p className="text-sm font-medium">Требования:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Установленный ncalayer</li>
                    <li>Действительная ЭЦП НУЦ РК</li>
                    <li>Подключенное устройство с сертификатом</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-base text-muted-foreground">
              <span>Нет аккаунта? </span>
              <a href="#" className="text-primary hover:underline font-medium">
                Зарегистрироваться
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Info text */}
        <div className="text-center text-base text-muted-foreground">
          Для демонстрации можно использовать любые данные
        </div>
      </div>
    </div>
  );
}

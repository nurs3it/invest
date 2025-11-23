import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Label,
} from '@shared/ui';
import { ThemeSwitcher } from '@widgets/theme-switcher';
import { Palette, Type, Layout, Zap } from 'lucide-react';

export function UIPage() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">Design System</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Компоненты и стили проекта Investment App
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        {/* Theme Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Цветовая палитра
            </CardTitle>
            <CardDescription>
              Доступны 4 темы: Светлая, Темная, Coffee и Для слабовидящих
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-background border-2 border-border"></div>
                <p className="text-base font-medium">Background</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-foreground"></div>
                <p className="text-sm font-medium">Foreground</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-primary"></div>
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-secondary"></div>
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-accent"></div>
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-muted"></div>
                <p className="text-sm font-medium">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-card border-2 border-border"></div>
                <p className="text-sm font-medium">Card</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-destructive"></div>
                <p className="text-sm font-medium">Destructive</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              Типографика
            </CardTitle>
            <CardDescription>Шрифт: Roboto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-base text-muted-foreground">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Heading 2</h2>
              <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <p className="text-sm text-muted-foreground">text-2xl font-semibold</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Heading 4</h4>
              <p className="text-sm text-muted-foreground">text-xl font-semibold</p>
            </div>
            <div>
              <p className="text-base">Body text - Regular</p>
              <p className="text-sm text-muted-foreground">text-base</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Small text - Muted</p>
              <p className="text-sm text-muted-foreground">text-sm text-muted-foreground</p>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Кнопки
            </CardTitle>
            <CardDescription>Варианты и размеры кнопок</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-base font-medium">Варианты:</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-base font-medium">Размеры:</p>
              <div className="flex items-center flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-base font-medium">Состояния:</p>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layout className="h-5 w-5" />
              Формы
            </CardTitle>
            <CardDescription>Элементы форм и ввода</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="input-default">Default Input</Label>
                <Input
                  id="input-default"
                  placeholder="Введите текст..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-email">Email Input</Label>
                <Input id="input-email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-password">Password Input</Label>
                <Input id="input-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-disabled">Disabled Input</Label>
                <Input id="input-disabled" disabled placeholder="Disabled" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Карточки</CardTitle>
            <CardDescription>Примеры использования Card компонента</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card 1</CardTitle>
                  <CardDescription>Простая карточка</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Содержимое карточки с информацией</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card 2</CardTitle>
                  <CardDescription>С действием</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">Карточка с кнопкой действия</p>
                  <Button size="sm" className="w-full">
                    Action
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card 3</CardTitle>
                  <CardDescription>Статистика</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$12,345</div>
                  <p className="text-sm text-muted-foreground">+20.1% от прошлого месяца</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Spacing */}
        <Card>
          <CardHeader>
            <CardTitle>Отступы и интервалы</CardTitle>
            <CardDescription>Система отступов (gap, padding, margin)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-base font-medium">Gap 2 (0.5rem / 8px)</p>
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-primary rounded"></div>
                <div className="h-10 w-10 bg-primary rounded"></div>
                <div className="h-10 w-10 bg-primary rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Gap 4 (1rem / 16px)</p>
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-secondary rounded"></div>
                <div className="h-10 w-10 bg-secondary rounded"></div>
                <div className="h-10 w-10 bg-secondary rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Gap 6 (1.5rem / 24px)</p>
              <div className="flex gap-6">
                <div className="h-10 w-10 bg-accent rounded"></div>
                <div className="h-10 w-10 bg-accent rounded"></div>
                <div className="h-10 w-10 bg-accent rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@shared/ui';

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold">Investment App</h3>
            </div>
            <p className="text-base text-muted-foreground max-w-xs">
              Современная платформа для управления инвестициями и финансового планирования
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Главная</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Dashboard</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Вход</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Поддержка</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Документация</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Помощь</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span>Контакты</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Подписка</h4>
            <p className="text-base text-muted-foreground">
              Получайте последние обновления и новости
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full h-11 rounded-md border border-input bg-background px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button className="w-full" size="sm">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground text-center md:text-left">
              © 2025 Investment App. Все права защищены.
            </p>
            <div className="flex gap-6 text-base text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

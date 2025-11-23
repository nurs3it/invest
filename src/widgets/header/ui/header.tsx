import { Link } from 'react-router-dom';
import { Button } from '@shared/ui';
import { ThemeDropdown } from '@widgets/theme-switcher';
import { Menu, Sparkles, LogIn } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ onMenuClick, showMenuButton = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-2xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {showMenuButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onMenuClick}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="hidden sm:inline">Investment App</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm">
                Главная
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeDropdown />
            </div>
            <Link to="/login">
              <AnimatedLoginButton />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function AnimatedLoginButton() {
  return (
    <Button
      size="sm"
      className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
    >
      <span className="relative z-10 flex items-center gap-2">
        <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        <span>Войти</span>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </Button>
  );
}

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
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            {showMenuButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onMenuClick}
                className="md:hidden h-9 w-9 sm:h-10 sm:w-10"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            )}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 font-bold text-lg sm:text-xl md:text-2xl">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
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

          <div className="flex items-center gap-2 sm:gap-3">
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
      className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
    >
      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
        <LogIn className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
        <span className="hidden xs:inline">Войти</span>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </Button>
  );
}

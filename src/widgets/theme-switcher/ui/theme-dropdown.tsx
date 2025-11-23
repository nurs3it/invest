import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@app/providers/with-theme';
import { Button } from '@shared/ui';
import { Sun, Moon, Coffee, Eye, ChevronDown } from 'lucide-react';
import { cn } from '@shared/lib/utils';

const themes = [
  { value: 'light', icon: Sun, label: 'Светлая' },
  { value: 'dark', icon: Moon, label: 'Темная' },
  { value: 'coffee', icon: Coffee, label: 'Coffee' },
  { value: 'accessible', icon: Eye, label: 'Доступная' },
] as const;

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 min-w-[120px] justify-between"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{currentTheme.label}</span>
        </div>
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
        />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border bg-popover shadow-lg z-50 animate-in fade-in-0 zoom-in-95">
          <div className="p-1">
            {themes.map(({ value, icon: ThemeIcon, label }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-sm text-base transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  theme === value
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground'
                )}
              >
                <ThemeIcon className="h-4 w-4" />
                <span>{label}</span>
                {theme === value && (
                  <span className="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


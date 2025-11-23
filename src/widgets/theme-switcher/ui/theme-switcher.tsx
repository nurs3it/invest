import { useTheme } from '@app/providers/with-theme';
import { Button } from '@shared/ui';
import { Sun, Moon, Coffee, Eye } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Светлая' },
    { value: 'dark', icon: Moon, label: 'Темная' },
    { value: 'coffee', icon: Coffee, label: 'Coffee' },
    { value: 'accessible', icon: Eye, label: 'Доступная' },
  ] as const;

  return (
    <div className="flex gap-1 rounded-lg border p-1 bg-background">
      {themes.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          variant={theme === value ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setTheme(value)}
          title={label}
          className="h-8 w-8"
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}


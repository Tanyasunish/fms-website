import { useEffect, useRef, useState, type FC } from 'react';
import { Check, Palette } from 'lucide-react';
import { THEMES } from '@/theme/Themes';
import { useTheme } from '@/theme/ThemeProvider';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: FC = () => {
  const { themeId, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  const activeTheme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Change theme. Current theme: ${activeTheme.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Palette size={18} />
      </button>

      {open && (
        <div className={styles.menu} role="menu" aria-label="Theme">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme.id === themeId}
              className={styles.item}
              onClick={() => {
                setTheme(theme.id);
                setOpen(false);
              }}
            >
              <span className={styles.itemLabel}>{theme.label}</span>
              {theme.id === themeId && <Check size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

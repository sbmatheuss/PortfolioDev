import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* armazenamento indisponível: o tema vale só nesta sessão */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className="grid size-10 cursor-pointer place-items-center rounded-[10px] text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {theme === 'dark' ? <FiSun size={20} aria-hidden /> : <FiMoon size={20} aria-hidden />}
    </button>
  );
}

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div>
      <p className="text-5xl">toggling theme</p>
      <button onClick={() => setTheme(nextTheme)}>
        Toggle to{' '}
        <span
          className={`px-3 py-2 rounded-md border ${theme === 'dark' ? 'bg-white text-gray-900' : `bg-gray-900 text-white`}`}
        >
          {nextTheme}
        </span>
      </button>
    </div>
  );
}

import { useState, useEffect } from 'react';

/**
 * 라이트/다크 테마 상태와 토글 동작을 관리하는 훅.
 *
 * 초기값은 localStorage에 저장된 사용자 선택을 우선하고,
 * 저장된 값이 없으면 OS의 `prefers-color-scheme`을 따른다.
 * 테마가 바뀔 때마다 `<html>`의 `dark` 클래스와 localStorage를 동기화한다.
 *
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Tailwind의 `dark:` variant는 `<html>.dark` 클래스 존재 여부로 동작하므로
  // 테마 상태가 바뀔 때마다 직접 DOM 클래스를 동기화해야 한다.
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}

import { MoonIcon, SunIcon } from './icons';

/**
 * 로고와 다크/라이트 테마 토글 버튼을 보여주는 상단 헤더.
 *
 * @param {{ theme: 'light' | 'dark', toggleTheme: () => void }} props
 */
export function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center w-full">
      <h1 className="text-preset-1 text-neutral-700 dark:text-neutral-0 block leading-none" style={{ width: '128px', height: '26px' }}>devfinder</h1>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center justify-center gap-spacing-150 md:gap-[16px] text-preset-8 text-neutral-500 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-0 uppercase lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 transition-colors duration-200"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <span>{theme === 'light' ? 'dark' : 'light'}</span>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
}

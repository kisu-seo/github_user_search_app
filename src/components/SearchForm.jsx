import { SearchIcon } from './icons';

/**
 * GitHub username 검색 입력 폼.
 * 검색 중에는 버튼이 비활성화되고, 직전 검색이 실패했으면 "No results"를 표시한다.
 *
 * @param {{
 *   searchQuery: string,
 *   setSearchQuery: (value: string) => void,
 *   loading: boolean,
 *   error: boolean,
 *   onSubmit: (e: React.FormEvent) => void,
 * }} props
 */
export function SearchForm({ searchQuery, setSearchQuery, loading, error, onSubmit }) {
  return (
    <form onSubmit={onSubmit} tabIndex={0} className="relative w-full flex items-center justify-center md:justify-between bg-neutral-0 dark:bg-neutral-800 rounded-radius-16 p-spacing-100 md:py-[10.5px] md:pl-[24px] md:pr-[12px] lg:py-[22px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] transition-shadow duration-300 focus:outline-none lg:focus-within:outline lg:focus-within:outline-2 lg:focus-within:outline-blue-500 lg:focus-within:outline-offset-[4px] lg:focus-within:rounded-radius-4">
      <div className="pl-spacing-0 pr-spacing-150 md:pl-spacing-0 md:pr-[20px] flex items-center" aria-hidden="true">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[188px] md:w-auto md:flex-1 bg-transparent text-neutral-500 dark:text-neutral-0 text-preset-3-mobile md:text-preset-3 placeholder:text-neutral-500 dark:placeholder:text-neutral-0/70 focus:outline-none lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 mr-spacing-0"
        aria-label="GitHub username search input"
      />
      <div className="flex items-center gap-spacing-300">
        {error && (
          <span className="text-preset-6 lg:text-preset-5 text-red-500 font-bold whitespace-nowrap" role="alert">
            No results
          </span>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-300 active:scale-[0.98] text-neutral-0 text-preset-5 py-spacing-150 px-spacing-250 rounded-radius-10 lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 transition-all duration-200 disabled:opacity-50 w-[99px] md:w-[107px]"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

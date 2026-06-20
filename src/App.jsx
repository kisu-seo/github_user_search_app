import { useTheme } from './hooks/useTheme';
import { useGithubUser } from './hooks/useGithubUser';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { ErrorCard } from './components/ErrorCard';
import { ProfileCard } from './components/ProfileCard';

/**
 * GitHub 사용자 검색 앱의 루트 컴포넌트.
 * 테마 상태(useTheme)와 검색/사용자 데이터 상태(useGithubUser)를 조합해
 * 헤더, 검색 폼, 결과 영역(에러/프로필/로딩)을 렌더링한다.
 */
function App() {
  const { theme, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, userData, loading, error, handleSearchSubmit } = useGithubUser();

  return (
    <div className="min-h-screen flex items-start justify-center pt-[32px] px-[16px] pb-[136px] md:pt-[40px] md:px-[32px] md:pb-[290px] lg:items-center lg:pt-0 lg:pb-0 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
      <main className="w-full max-w-[730px] flex flex-col gap-spacing-400 md:gap-[40px] lg:gap-[40px]">

        <Header theme={theme} toggleTheme={toggleTheme} />

        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          loading={loading}
          error={error}
          onSubmit={handleSearchSubmit}
        />

        {/*
          결과 영역: 에러 > 사용자 데이터 > 로딩 순으로 우선순위를 두고 렌더링한다.
          (검색 실패 시 직전 userData가 남아 있어도 항상 에러 카드가 먼저 보인다)
        */}
        <section className={`w-full bg-neutral-0 dark:bg-neutral-800 rounded-radius-16 py-spacing-400 px-spacing-300 md:py-[48px] md:px-[32px] lg:p-[48px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none transition-all duration-300 min-h-[400px] flex items-center justify-center ${error ? 'lg:h-[189px] lg:min-h-0' : ''}`}>
          {error ? (
            <ErrorCard theme={theme} />
          ) : userData ? (
            <ProfileCard userData={userData} />
          ) : (
            <div className="flex items-center justify-center text-preset-3 text-neutral-500 dark:text-neutral-200">
              Loading user profile...
            </div>
          )}
        </section>

      </main>
    </div>
  );
}

export default App;

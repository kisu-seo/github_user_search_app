import { useState, useEffect } from 'react';

/* === Icons Component / 아이콘 컴포넌트 === */

// 돋보기 검색 아이콘
const SearchIcon = () => (
  <svg className="w-spacing-250 h-spacing-250 text-blue-500" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="currentColor"/>
  </svg>
);

// 달 아이콘
const MoonIcon = () => (
  <svg className="w-spacing-250 h-spacing-250 transition-colors duration-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="currentColor" fillRule="nonzero"/>
  </svg>
);

// 해 아이콘
const SunIcon = () => (
  <svg className="w-spacing-250 h-spacing-250 transition-colors duration-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="currentColor" fillRule="nonzero">
      <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/>
    </g>
  </svg>
);

// 위치 아이콘
const LocationIcon = () => (
  <svg className="w-spacing-250 h-spacing-250" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="currentColor"/>
  </svg>
);

// 트위터 아이콘
const TwitterIcon = () => (
  <svg className="w-spacing-250 h-spacing-250" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="currentColor"/>
  </svg>
);

// 웹사이트 아이콘
const WebsiteIcon = () => (
  <svg className="w-spacing-250 h-spacing-250" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="currentColor">
      <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/>
      <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/>
    </g>
  </svg>
);

// 회사 아이콘
const CompanyIcon = () => (
  <svg className="w-spacing-250 h-spacing-250" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="currentColor">
      <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/>
    </g>
  </svg>
);

/* === App Component / 애플리케이션 컴포넌트 === */

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 시스템 테마 선호 감지 및 로컬 스토리지에 따른 기본 테마 설정
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // 테마가 변경될 때마다 HTML 클래스 조작
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 첫 마더보드 렌더링 시 octocat 데이터 호출
  useEffect(() => {
    fetchUserData('octocat');
  }, []);

  // GitHub User API 호출 함수
  const fetchUserData = async (username) => {
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // 검색 양식 전송 핸들러
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchUserData(searchQuery);
  };

  // 날짜 포맷팅 함수 (Joined 25 Jan 2011 형태로 변환)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `Joined ${day} ${month} ${year}`;
  };

  // 테마 수동 변경 토글
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-[32px] px-[16px] pb-[136px] md:pt-[40px] md:px-[32px] md:pb-[290px] lg:items-center lg:pt-0 lg:pb-0 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
      <main className="w-full max-w-[730px] flex flex-col gap-spacing-400 md:gap-[40px] lg:gap-[40px]">
        
        {/* --- Header / 네비게이션 헤더 --- */}
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

        {/* --- Search Box / 검색 폼 --- */}
        <form onSubmit={handleSearchSubmit} tabIndex={0} className="relative w-full flex items-center justify-center md:justify-between bg-neutral-0 dark:bg-neutral-800 rounded-radius-16 p-spacing-100 md:py-[10.5px] md:pl-[24px] md:pr-[12px] lg:py-[22px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] transition-shadow duration-300 focus:outline-none lg:focus-within:outline lg:focus-within:outline-2 lg:focus-within:outline-blue-500 lg:focus-within:outline-offset-[4px] lg:focus-within:rounded-radius-4">
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

        {/* --- Result Container / 결과 영역 --- */}
        <section className="w-full bg-neutral-0 dark:bg-neutral-800 rounded-radius-16 py-spacing-400 px-spacing-300 md:py-[48px] md:px-[32px] lg:p-[48px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none transition-all duration-300 min-h-[400px] flex items-center justify-center">
          {error ? (
            /* --- Error Card / 에러 발생 화면 --- */
            <div className="flex flex-col items-center justify-center text-center max-w-[490px] py-spacing-600 lg:py-[80px]">
              <h2 className="text-preset-2 text-neutral-700 dark:text-neutral-0 mb-spacing-200 lg:mb-[16px] lg:text-[22px] font-bold">No results found!</h2>
              <p className="text-preset-6 text-neutral-500 dark:text-neutral-200 lg:max-w-[420px] lg:mx-auto lg:leading-[25px]">
                We couldn’t find any GitHub users matching your search. Please double-check the username and try again.
              </p>
            </div>
          ) : userData ? (
            /* --- User Profile Card / 유저 프로필 카드 --- */
            <div className="flex gap-spacing-500 md:gap-[32px] w-full items-start">
              {/* 데스크톱 아바타 */}
              <img 
                src={userData.avatar_url} 
                alt={`${userData.name || userData.login} avatar`}
                className="hidden md:block w-[117px] h-[117px] rounded-radius-full object-cover select-none"
              />

              <div className="flex-1 flex flex-col">
                {/* 상단 프로필 헤더 */}
                <div className="flex gap-spacing-250 md:gap-0 items-start justify-between mb-spacing-400 md:mb-[32px] md:w-[480px] lg:mb-[24px]">
                  {/* 모바일 아바타 */}
                  <img 
                    src={userData.avatar_url} 
                    alt={`${userData.name || userData.login} avatar`}
                    className="md:hidden w-[70px] h-[70px] rounded-radius-full object-cover select-none"
                  />
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-start w-full">
                    <div>
                      <h2 className="text-preset-1 text-neutral-700 dark:text-neutral-0">
                        {userData.name || userData.login}
                      </h2>
                      <span className="text-preset-4 text-blue-500 dark:text-blue-300 block md:mt-[2px]">
                        @{userData.login}
                      </span>
                    </div>
                    <span className="text-preset-6 text-neutral-500 dark:text-neutral-0 mt-spacing-050 md:mt-0">
                      {formatDate(userData.created_at)}
                    </span>
                  </div>
                </div>

                {/* 바이오 설명 */}
                <p className={`text-preset-4 lg:text-preset-6 mb-spacing-300 ${userData.bio ? 'text-neutral-500 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-0/70'}`}>
                  {userData.bio || 'This profile has no bio'}
                </p>

                {/* 통계 테이블 (Repos, Followers, Following) */}
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-radius-10 p-spacing-200 md:px-[32px] md:w-[480px] flex flex-col md:flex-row justify-between items-start md:items-center text-left md:gap-0 gap-y-spacing-200 transition-colors duration-300 mb-spacing-300">
                  <div className="flex flex-col gap-spacing-050 md:w-[138px] md:text-left">
                    <span className="text-preset-7 text-neutral-500 dark:text-neutral-0 uppercase block md:mb-[4px]">Repos</span>
                    <strong className="text-preset-2 text-neutral-700 dark:text-neutral-0 leading-none">
                      {userData.public_repos}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-spacing-050 md:w-[138px] md:text-left">
                    <span className="text-preset-7 text-neutral-500 dark:text-neutral-0 uppercase block md:mb-[4px]">Followers</span>
                    <strong className="text-preset-2 text-neutral-700 dark:text-neutral-0 leading-none">
                      {userData.followers}
                    </strong>
                  </div>
                  <div className="flex flex-col gap-spacing-050 md:w-[138px] md:text-left">
                    <span className="text-preset-7 text-neutral-500 dark:text-neutral-0 uppercase block md:mb-[4px]">Following</span>
                    <strong className="text-preset-2 text-neutral-700 dark:text-neutral-0 leading-none">
                      {userData.following}
                    </strong>
                  </div>
                </div>

                {/* 하단 세부 정보 링크 모음 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-spacing-200 gap-x-spacing-400 text-preset-6">
                  
                  {/* 위치 */}
                  <div className={`flex items-center gap-spacing-200 ${userData.location ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
                    <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><LocationIcon /></div>
                    <span className="truncate">{userData.location || 'Not Available'}</span>
                  </div>

                  {/* 트위터 */}
                  <div className={`flex items-center gap-spacing-200 ${userData.twitter_username ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
                    <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><TwitterIcon /></div>
                    {userData.twitter_username ? (
                      <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer" className="hover:underline lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 truncate">
                        {userData.twitter_username}
                      </a>
                    ) : (
                      <span>Not Available</span>
                    )}
                  </div>

                  {/* 웹사이트 */}
                  <div className={`flex items-center gap-spacing-200 ${userData.blog ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
                    <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><WebsiteIcon /></div>
                    {userData.blog ? (
                      <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`} target="_blank" rel="noopener noreferrer" className="hover:underline lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 truncate">
                        {userData.blog}
                      </a>
                    ) : (
                      <span>Not Available</span>
                    )}
                  </div>

                  {/* 회사 */}
                  <div className={`flex items-center gap-spacing-200 ${userData.company ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
                    <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><CompanyIcon /></div>
                    {userData.company ? (
                      <a href={`https://github.com/${userData.company.startsWith('@') ? userData.company.slice(1) : userData.company}`} target="_blank" rel="noopener noreferrer" className="hover:underline lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 truncate">
                        {userData.company}
                      </a>
                    ) : (
                      <span>Not Available</span>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ) : (
            /* --- Loading Indicator / 로딩 중 상태 --- */
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

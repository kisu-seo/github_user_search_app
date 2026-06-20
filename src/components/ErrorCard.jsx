/**
 * 검색한 GitHub 사용자를 찾지 못했을 때 보여주는 에러 카드.
 *
 * @param {{ theme: 'light' | 'dark' }} props
 */
export function ErrorCard({ theme }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[490px] lg:max-w-[634px] lg:w-[634px] py-spacing-600 lg:p-0">
      <h2 className="text-preset-2 text-neutral-700 dark:text-neutral-0 mb-spacing-200 lg:mb-[16px] lg:text-[22px] font-bold">No results found!</h2>
      {/* 라이트 모드에서만 디자인 시안의 회색(neutral-300) 톤을 강제 적용 */}
      <p
        className="text-preset-6 text-neutral-500 dark:text-neutral-200 lg:max-w-[634px] lg:w-[634px] lg:m-0 lg:leading-[25px]"
        style={theme === 'light' ? { color: 'var(--color-neutral-300)' } : {}}
      >
        We couldn’t find any GitHub users matching your search. Please double-check the username and try again.
      </p>
    </div>
  );
}

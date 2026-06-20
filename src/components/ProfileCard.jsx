import { LocationIcon, TwitterIcon, WebsiteIcon, CompanyIcon } from './icons';
import { formatDate } from '../utils/formatDate';

/**
 * GitHub 사용자 정보(아바타, 이름, 통계, 위치 등)를 보여주는 프로필 카드.
 * 데스크톱/모바일 레이아웃이 서로 달라 아바타를 두 군데에 따로 렌더링하고
 * `hidden`/`md:hidden`으로 화면 크기에 맞는 쪽만 노출한다.
 *
 * @param {{ userData: object }} props - GitHub Users API 응답 객체
 */
export function ProfileCard({ userData }) {
  return (
    <div className="flex gap-spacing-500 md:gap-[32px] w-full items-start">
      {/* 데스크톱 레이아웃용 아바타 (md 이상에서만 노출) */}
      <img
        src={userData.avatar_url}
        alt={`${userData.name || userData.login} avatar`}
        className="hidden md:block w-[117px] h-[117px] rounded-radius-full object-cover select-none"
      />

      <div className="flex-1 flex flex-col">
        <div className="flex gap-spacing-250 md:gap-0 items-start justify-between mb-spacing-400 md:mb-[32px] md:w-[480px] lg:mb-[24px]">
          {/* 모바일 레이아웃용 아바타 (md 미만에서만 노출) */}
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

        {/* bio가 없으면 플레이스홀더 문구를 더 옅은 색으로 표시 */}
        <p className={`text-preset-4 lg:text-preset-6 mb-spacing-300 ${userData.bio ? 'text-neutral-500 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-0/70'}`}>
          {userData.bio || 'This profile has no bio'}
        </p>

        {/* Repos / Followers / Following 통계 */}
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

        {/* 위치 / 트위터 / 웹사이트 / 회사 — 값이 없으면 흐리게 표시하고 "Not Available" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-spacing-200 gap-x-spacing-400 text-preset-6">

          <div className={`flex items-center gap-spacing-200 ${userData.location ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
            <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><LocationIcon /></div>
            <span className="truncate">{userData.location || 'Not Available'}</span>
          </div>

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

          <div className={`flex items-center gap-spacing-200 ${userData.blog ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
            <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><WebsiteIcon /></div>
            {userData.blog ? (
              // blog 필드는 프로토콜이 없을 수 있어 https:// 를 보정해서 링크를 만든다
              <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`} target="_blank" rel="noopener noreferrer" className="hover:underline lg:cursor-pointer lg:focus-visible:outline lg:focus-visible:outline-2 lg:focus-visible:outline-blue-500 lg:focus-visible:outline-offset-[4px] lg:focus-visible:rounded-radius-4 truncate">
                {userData.blog}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>

          <div className={`flex items-center gap-spacing-200 ${userData.company ? 'text-neutral-500 dark:text-neutral-0' : 'text-neutral-300 dark:text-neutral-0 opacity-50'}`}>
            <div className="w-spacing-250 flex justify-center text-neutral-900 dark:text-neutral-0"><CompanyIcon /></div>
            {userData.company ? (
              // company 값이 "@org" 형태면 GitHub 조직으로 간주하고 "@"를 떼어 링크를 만든다
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
  );
}

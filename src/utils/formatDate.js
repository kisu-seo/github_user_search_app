/**
 * ISO 날짜 문자열을 "Joined 25 Jan 2011" 형식으로 변환한다.
 *
 * @param {string} dateString - GitHub API의 `created_at` 같은 ISO 8601 날짜 문자열
 * @returns {string} 포맷된 가입일 문자열. `dateString`이 없으면 빈 문자열을 반환한다.
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `Joined ${day} ${month} ${year}`;
};

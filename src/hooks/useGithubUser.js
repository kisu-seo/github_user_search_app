import { useState, useEffect } from 'react';

/**
 * GitHub 사용자 검색 폼의 상태(검색어, 결과, 로딩, 에러)와
 * GitHub Users API 호출 로직을 함께 관리하는 훅.
 *
 * 마운트 시 기본 사용자(`octocat`)를 자동으로 조회한다.
 *
 * @returns {{
 *   searchQuery: string,
 *   setSearchQuery: (value: string) => void,
 *   userData: object | null,
 *   loading: boolean,
 *   error: boolean,
 *   handleSearchSubmit: (e: React.FormEvent) => void,
 * }}
 */
export function useGithubUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * 주어진 GitHub username으로 사용자 정보를 조회하고 상태를 갱신한다.
   * 404 등 실패 응답은 모두 `error` 상태로 처리한다.
   *
   * @param {string} username
   */
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

  // 최초 마운트 시 기본 프로필(octocat)을 보여주기 위한 초기 호출
  useEffect(() => {
    fetchUserData('octocat');
  }, []);

  /** 검색 폼 submit 핸들러: 기본 동작을 막고 현재 검색어로 조회한다. */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchUserData(searchQuery);
  };

  return { searchQuery, setSearchQuery, userData, loading, error, handleSearchSubmit };
}

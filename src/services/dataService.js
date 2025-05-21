import { useState, useEffect } from 'react';
import axios from 'axios';
import { defaultTournamentData } from '../data/defaultData';

// APIのベースURL
const API_BASE_URL = 'http://localhost:3000/api';

export const useTournamentData = () => {
  const [data, setData] = useState(defaultTournamentData);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 大会データを取得
        const tournamentsResponse = await axios.get(`${API_BASE_URL}/tournaments`);
        setData(tournamentsResponse.data);

        // 統計データも取得
        const statsResponse = await axios.get(`${API_BASE_URL}/stats`);
        setStats(statsResponse.data);

        setLastUpdated(new Date());
      } catch (error) {
        console.log('APIデータ取得エラー、デフォルトデータを使用します', error);
        setError(error);
        // デフォルトデータはすでに設定済み
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // データを手動で更新する関数
  const refreshData = async () => {
    setLoading(true);
    try {
      const tournamentsResponse = await axios.get(`${API_BASE_URL}/tournaments`);
      setData(tournamentsResponse.data);

      const statsResponse = await axios.get(`${API_BASE_URL}/stats`);
      setStats(statsResponse.data);

      setLastUpdated(new Date());
      setError(null);
    } catch (error) {
      console.log('データ更新エラー', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // 特定のホロメンの詳細データを取得
  const getHolomemDetails = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/holomem/${name}`);
      return response.data;
    } catch (error) {
      console.error('ホロメン詳細取得エラー', error);
      return null;
    }
  };

  // 特定の期間の統計データを取得
  const getStatsByPeriod = async (period) => {
    if (stats[period]) return stats[period];

    try {
      const response = await axios.get(`${API_BASE_URL}/stats/${period}`);
      return response.data;
    } catch (error) {
      console.error('統計データ取得エラー', error);
      return null;
    }
  };

  return {
    data,
    loading,
    error,
    lastUpdated,
    refreshData,
    getHolomemDetails,
    getStatsByPeriod
  };
};

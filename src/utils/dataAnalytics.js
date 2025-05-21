import { holomemColors } from '../data/defaultData';

/**
 * ホロメン採用率データを生成
 * 
 * @param {Array} tournamentData - 大会データ
 * @param {boolean} limitToTop5 - 上位5件に制限するかどうか
 * @returns {Array} ホロメンの使用率データ
 */
export const generateHolomemUsageData = (tournamentData, limitToTop5 = false) => {
  // モックデータとしてホロメンのリストを返す
  const allData = [
    { name: '天音かなた', usage: 35, color: '#76c0ea' },
    { name: '白上フブキ', usage: 30, color: '#53c7ea' },
    { name: 'さくらみこ', usage: 20, color: '#FE4B74' },
    { name: '戌神ころね', usage: 15, color: '#dcb414' },
    { name: '兎田ぺこら', usage: 10, color: '#65baea' },
    // その他のホロメンも追加
    { name: '宝鐘マリン', usage: 7, color: '#a72413' },
    { name: '大空スバル', usage: 6, color: '#bde717' },
    { name: '星街すいせい', usage: 5, color: '#2dcde4' },
    { name: '不知火フレア', usage: 4, color: '#dc3813' },
    { name: '雪花ラミィ', usage: 3, color: '#48b5e3' },
    { name: '猫又おかゆ', usage: 3, color: '#bf65e8' },
    { name: '博衣こより', usage: 2, color: '#fe68ad' }
  ];
  
  return limitToTop5 ? allData.slice(0, 5) : allData;
};

/**
 * 期間でフィルタリングする関数
 * 
 * @param {Array} data - フィルタリングするデータ
 * @param {string} period - 期間 ('day', 'week', 'month', 'year')
 * @returns {Array} フィルタリングされたデータ
 */
export const filterByPeriod = (data, period) => {
  // 実装は省略 - 現時点ではダミーデータを返す
  // 実際の実装ではデータの日付に基づいてフィルタリングする
  switch(period) {
    case 'day':
      return data.slice(0, 10); // デモ用に適当なデータ量を返す
    case 'week':
      return data.slice(0, 20);
    case 'month':
      return data.slice(0, 30);
    case 'year':
      return data;
    default:
      return data;
  }
};
// src/hooks/useChartData.js
import { useState, useEffect } from 'react';
import { generateHolomemUsageData, filterByPeriod } from '../utils/dataAnalytics';

/**
 * チャートデータを管理するカスタムフック
 * 
 * @param {Array} data - 元のトーナメントデータ
 * @param {string} activePeriod - アクティブな期間
 * @returns {Object} チャートデータとその操作関数
 */
export const useChartData = (data, activePeriod) => {
  // チャートデータの状態
  const [chartData, setChartData] = useState([]);
  // 全てのホロメンのデータ
  const [allHolomemData, setAllHolomemData] = useState([]);
  // トップ5とその他のデータ
  const [top5Data, setTop5Data] = useState([]);
  // その他のデータの詳細
  const [otherDetailData, setOtherDetailData] = useState([]);
  // 表示モード (top5 または others)
  const [displayMode, setDisplayMode] = useState('top5');
  // 集計対象の大会数
  const [tournamentCount, setTournamentCount] = useState(0);

  // データ更新処理
  const updateChartData = () => {
    if (!data || data.length === 0) return;
    
    // 期間でフィルタリング
    const filteredData = filterByPeriod(data, activePeriod);
    setTournamentCount(filteredData.length);
    
    // 全てのホロメンの使用率データを生成
    const allHolomems = generateHolomemUsageData(filteredData, false);
    setAllHolomemData(allHolomems);
    
    // トップ5と「その他」に分割
    const top5 = allHolomems.slice(0, 5);
    
    // 「その他」カテゴリの計算
    const othersTotal = allHolomems.slice(5).reduce((sum, item) => sum + item.usage, 0);
    const top5WithOthers = [
      ...top5,
      { 
        name: 'その他', 
        usage: othersTotal, 
        color: '#A9A9A9',
        isOthersCategory: true 
      }
    ];
    
    setTop5Data(top5WithOthers);
    setOtherDetailData(allHolomems.slice(5));
    
    // 初期表示はトップ5
    setChartData(formatForPieChart(top5WithOthers));
    setDisplayMode('top5');
  };

  // PieChart用にデータをフォーマット
  const formatForPieChart = (data) => {
    return data.map(item => ({
      name: item.name,
      population: item.usage,
      color: item.color,
      legendFontColor: '#333',
      legendFontSize: 14,
      isOthersCategory: item.isOthersCategory || false
    }));
  };

  // 表示モードを切り替える
  const toggleDisplayMode = () => {
    if (displayMode === 'top5') {
      // その他の詳細表示に切り替え
      setChartData(formatForPieChart(otherDetailData));
      setDisplayMode('others');
    } else {
      // トップ5表示に戻す
      setChartData(formatForPieChart(top5Data));
      setDisplayMode('top5');
    }
  };

  // データか期間が変更されたらチャートデータを更新
  useEffect(() => {
    updateChartData();
  }, [data, activePeriod]);

  return {
    chartData,
    displayMode,
    tournamentCount,
    toggleDisplayMode,
    usageData: displayMode === 'top5' ? top5Data : otherDetailData
  };
};
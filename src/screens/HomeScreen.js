import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, ActivityIndicator, RefreshControl, FlatList } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { COLORS } from '../styles/colors';
import PeriodSelector from '../components/PeriodSelector';
import HolomemDetailCard from '../components/HolomemDetailCard';
import TouchablePieChart from '../components/TouchablePieChart';
import CustomLegend from '../components/CustomLegend';
import { useTournamentData } from '../services/dataService';
import { useChartData } from '../hooks/useChartData';

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  // データサービスからデータを取得
  const { data, loading, error, lastUpdated, refreshData } = useTournamentData();
  
  // 期間の状態を管理
  const [activePeriod, setActivePeriod] = useState('week');
  const [periodLabel, setPeriodLabel] = useState('2025年3月1日〜3月7日');
  
  // チャートデータの管理
  const { 
    chartData, 
    displayMode, 
    tournamentCount, 
    toggleDisplayMode, 
    usageData 
  } = useChartData(data, activePeriod);
  
  // リフレッシュ中の状態
  const [refreshing, setRefreshing] = useState(false);

  // 期間選択時のデータ更新
  const updatePeriodData = (period) => {
    setActivePeriod(period);
    
    // 期間に応じてラベルを変更
    switch(period) {
      case 'day':
        setPeriodLabel('直近24時間');
        break;
      case 'week':
        setPeriodLabel('直近1週間');
        break;
      case 'month':
        setPeriodLabel('直近1ヶ月');
        break;
      case 'year':
        setPeriodLabel('直近1年');
        break;
      default:
        setPeriodLabel('全期間');
    }
  };

  // プルダウンでリフレッシュする処理
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshData();
    setRefreshing(false);
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  // ホロメン詳細カードをレンダリングする関数
  const renderHolomemDetailCard = ({ item }) => (
    <HolomemDetailCard holomem={item} />
  );

  // リスト全体をレンダリングする
  const renderContent = () => {
    // フィルタリングされたデータ
    const filteredData = usageData.filter(item => !item.isOthersCategory);
    
    return (
      <View style={styles.container}>
        {/* ヘッダー部分 - スクロールしない固定部分 */}
        <View style={styles.headerContainer}>
          <Text style={commonStyles.title}>優勝デッキ推しホロメン採用枚数</Text>
          <Text style={commonStyles.subtitle}>{periodLabel}</Text>
          
          {/* 最終更新日時 */}
          {lastUpdated && (
            <Text style={styles.lastUpdated}>
              最終更新: {lastUpdated.toLocaleString()}
            </Text>
          )}
          
          {/* 期間選択ボタン */}
          <PeriodSelector 
            activePeriod={activePeriod}
            onSelectPeriod={updatePeriodData}
          />
        </View>
        
        {/* ローディング表示 */}
        {loading && !refreshing && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Text style={styles.loadingText}>データを読み込み中...</Text>
          </View>
        )}
        
        {/* エラー表示 */}
        {error && !loading && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              データの読み込みに失敗しました。
            </Text>
          </View>
        )}
        
        {/* メインコンテンツ - FlatListのヘッダーとして表示 */}
        {!loading && filteredData.length > 0 && (
          <FlatList
            data={filteredData}
            renderItem={renderHolomemDetailCard}
            keyExtractor={(item, index) => `holomem-${index}`}
            contentContainerStyle={styles.listContainer}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[COLORS.primary]}
              />
            }
            ListHeaderComponent={() => (
              <View>
                {/* チャート表示 */}
                {chartData.length > 0 && (
                  <View style={commonStyles.chartContainer}>
                    <TouchablePieChart
                      data={chartData}
                      width={screenWidth - 40}
                      chartConfig={chartConfig}
                      onChartPress={toggleDisplayMode}
                      displayMode={displayMode}
                    />
                  </View>
                )}
                
                {/* データソースの表示 */}
                <View style={styles.dataSourceContainer}>
                  <Text style={styles.dataSourceText}>
                    データソース: X(Twitter)での大会結果報告
                  </Text>
                  <Text style={styles.dataSourceText}>
                    集計対象大会数: {tournamentCount}件
                  </Text>
                </View>
                
                {/* 注釈 */}
                <View style={styles.noteContainer}>
                  <Text style={styles.modeText}>
                    {displayMode === 'top5' ? '現在の表示: トップ5とその他' : '現在の表示: その他の詳細'}
                  </Text>
                </View>
                
                {/* 詳細分析タイトル */}
                <View style={styles.sectionTitleContainer}>
                  <Text style={styles.sectionTitle}>
                    {displayMode === 'top5' ? '人気ホロメン詳細分析' : 'その他のホロメン詳細分析'}
                  </Text>
                </View>
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>表示できるデータがありません</Text>
              </View>
            )}
          />
        )}
        
        {/* データがない場合の表示 */}
        {!loading && filteredData.length === 0 && !error && (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>表示できるデータがありません</Text>
          </View>
        )}
      </View>
    );
  };

  return renderContent();
};

// スタイル
const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: 10,
    color: COLORS.lightText,
  },
  errorContainer: {
    padding: 15,
    backgroundColor: '#ffeeee',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: 12,
    color: COLORS.lightText,
    textAlign: 'center',
    marginBottom: 5,
  },
  dataSourceContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  dataSourceText: {
    fontSize: 12,
    color: COLORS.lightText,
    textAlign: 'center',
  },
  noteContainer: {
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  noteText: {
    fontSize: 12,
    color: COLORS.lightText,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  modeText: {
    fontSize: 12,
    color: COLORS.primary,
    marginTop: 5,
    fontWeight: 'bold',
  },
  sectionTitleContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  noDataContainer: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    color: COLORS.lightText,
    fontSize: 16,
  },
};

export default HomeScreen;
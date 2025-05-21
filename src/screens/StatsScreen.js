import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { COLORS } from '../styles/colors';
import PeriodSelector from '../components/PeriodSelector';

/**
 * 統計情報画面コンポーネント
 * ホロメンカードの使用率ランキングを表示する画面
 * 
 * @returns {JSX.Element} 統計情報画面コンポーネント
 */
const StatsScreen = () => {
  // 期間の状態を管理
  const [activePeriod, setActivePeriod] = useState('week'); // 'day', 'week', 'month', 'year'
  const [periodLabel, setPeriodLabel] = useState('2025年3月1日〜3月7日');
  const [sortBy, setSortBy] = useState('usage'); // 'usage', 'name'

  // 期間選択時のデータ更新
  const updatePeriodData = (period) => {
    setActivePeriod(period);
    
    // 期間に応じてラベルを変更
    switch(period) {
      case 'day':
        setPeriodLabel('2025年3月7日');
        break;
      case 'week':
        setPeriodLabel('2025年3月1日〜3月7日');
        break;
      case 'month':
        setPeriodLabel('2025年3月');
        break;
      case 'year':
        setPeriodLabel('2025年');
        break;
    }
  };

  // 期間に応じたサンプルデータ
  const getPeriodData = () => {
    let data;
    
    switch(activePeriod) {
      case 'day':
        data = [
          { id: '1', name: 'ホロメンA', usage: 35, winRate: 65, color: COLORS.primary },
          { id: '2', name: 'ホロメンB', usage: 25, winRate: 58, color: COLORS.secondary },
          { id: '3', name: 'ホロメンC', usage: 20, winRate: 62, color: COLORS.purple },
          { id: '4', name: 'ホロメンD', usage: 12, winRate: 54, color: COLORS.orange },
          { id: '5', name: 'ホロメンE', usage: 8, winRate: 50, color: COLORS.green },
        ];
        break;
      case 'week':
        data = [
          { id: '1', name: 'ホロメンA', usage: 30, winRate: 62, color: COLORS.primary },
          { id: '2', name: 'ホロメンB', usage: 22, winRate: 60, color: COLORS.secondary },
          { id: '3', name: 'ホロメンC', usage: 18, winRate: 58, color: COLORS.purple },
          { id: '4', name: 'ホロメンD', usage: 15, winRate: 55, color: COLORS.orange },
          { id: '5', name: 'ホロメンE', usage: 10, winRate: 52, color: COLORS.green },
          { id: '6', name: 'その他', usage: 5, winRate: 48, color: COLORS.red },
        ];
        break;
      case 'month':
        data = [
          { id: '1', name: 'ホロメンA', usage: 28, winRate: 60, color: COLORS.primary },
          { id: '2', name: 'ホロメンB', usage: 24, winRate: 58, color: COLORS.secondary },
          { id: '3', name: 'ホロメンC', usage: 20, winRate: 56, color: COLORS.purple },
          { id: '4', name: 'ホロメンD', usage: 16, winRate: 54, color: COLORS.orange },
          { id: '5', name: 'ホロメンE', usage: 12, winRate: 52, color: COLORS.green },
        ];
        break;
      case 'year':
        data = [
          { id: '1', name: 'ホロメンA', usage: 25, winRate: 58, color: COLORS.primary },
          { id: '2', name: 'ホロメンB', usage: 23, winRate: 56, color: COLORS.secondary },
          { id: '3', name: 'ホロメンC', usage: 22, winRate: 55, color: COLORS.purple },
          { id: '4', name: 'ホロメンD', usage: 18, winRate: 53, color: COLORS.orange },
          { id: '5', name: 'ホロメンE', usage: 12, winRate: 51, color: COLORS.green },
        ];
        break;
      default:
        data = [
          { id: '1', name: 'ホロメンA', usage: 30, winRate: 62, color: COLORS.primary },
          { id: '2', name: 'ホロメンB', usage: 22, winRate: 60, color: COLORS.secondary },
          { id: '3', name: 'ホロメンC', usage: 18, winRate: 58, color: COLORS.purple },
          { id: '4', name: 'ホロメンD', usage: 15, winRate: 55, color: COLORS.orange },
          { id: '5', name: 'ホロメンE', usage: 10, winRate: 52, color: COLORS.green },
          { id: '6', name: 'その他', usage: 5, winRate: 48, color: COLORS.red },
        ];
    }
    
    // ソート
    if (sortBy === 'usage') {
      return data.sort((a, b) => b.usage - a.usage);
    } else if (sortBy === 'name') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'winRate') {
      return data.sort((a, b) => b.winRate - a.winRate);
    }
    
    return data;
  };

  // ソート方法の切り替え
  const toggleSortMethod = (method) => {
    setSortBy(method);
  };

  // カードアイテムのレンダリング
  const renderCard = ({ item, index }) => {
    return (
      <View style={styles.rankCard}>
        <View style={styles.rankNumberContainer}>
          <Text style={styles.rankNumber}>{index + 1}</Text>
        </View>
        <View style={[styles.cardColor, { backgroundColor: item.color }]} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.name}</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>使用率:</Text>
              <Text style={styles.statValue}>{item.usage}%</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>勝率:</Text>
              <Text style={styles.statValue}>{item.winRate}%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const data = getPeriodData();

  return (
    <View style={commonStyles.screen}>
      <Text style={commonStyles.title}>カード使用率ランキング</Text>
      <Text style={commonStyles.subtitle}>{periodLabel}</Text>
      
      {/* 期間選択ボタン */}
      <PeriodSelector 
        activePeriod={activePeriod}
        onSelectPeriod={updatePeriodData}
      />
      
      {/* ソートオプション */}
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>並び替え:</Text>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'usage' && styles.activeSortButton]}
          onPress={() => toggleSortMethod('usage')}
        >
          <Text style={[styles.sortButtonText, sortBy === 'usage' && styles.activeSortButtonText]}>使用率</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'winRate' && styles.activeSortButton]}
          onPress={() => toggleSortMethod('winRate')}
        >
          <Text style={[styles.sortButtonText, sortBy === 'winRate' && styles.activeSortButtonText]}>勝率</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'name' && styles.activeSortButton]}
          onPress={() => toggleSortMethod('name')}
        >
          <Text style={[styles.sortButtonText, sortBy === 'name' && styles.activeSortButtonText]}>名前</Text>
        </TouchableOpacity>
      </View>
      
      {/* ランキングリスト */}
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// スタイル
const styles = {
  rankCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rankNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rankNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  cardColor: {
    width: 6,
    height: 40,
    borderRadius: 3,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    marginRight: 15,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  sortLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  sortButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeSortButton: {
    backgroundColor: COLORS.primary,
  },
  sortButtonText: {
    fontSize: 12,
    color: '#666',
  },
  activeSortButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
};

export default StatsScreen;
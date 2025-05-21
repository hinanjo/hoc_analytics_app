// src/components/HolomemDetailCard.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { COLORS } from '../styles/colors';

/**
 * ホロメン詳細カードコンポーネント
 * 1枚のホロメンカードに関する詳細情報を表示
 * 
 * @param {Object} holomem - ホロメンデータ
 * @returns {JSX.Element}
 */
const HolomemDetailCard = ({ holomem }) => {
  // モックデータ - 実際の実装ではAPIからデータを取得
  const getRegionalData = (holomemName) => {
    // 各ホロメンに応じた異なる地域分布データ
    const mockData = {
      '天音かなた': [
        { region: '関東', rank: 1, percentage: 42 },
        { region: '関西', rank: 2, percentage: 35 },
        { region: '九州', rank: 3, percentage: 28 },
      ],
      '白上フブキ': [
        { region: '関東', rank: 2, percentage: 38 },
        { region: '北海道', rank: 1, percentage: 40 },
        { region: '東北', rank: 2, percentage: 31 },
      ],
      'さくらみこ': [
        { region: '関西', rank: 1, percentage: 45 },
        { region: '関東', rank: 3, percentage: 30 },
        { region: '四国', rank: 2, percentage: 33 },
      ],
      '戌神ころね': [
        { region: '九州', rank: 1, percentage: 37 },
        { region: '関東', rank: 4, percentage: 26 },
        { region: '中部', rank: 2, percentage: 32 },
      ],
      '兎田ぺこら': [
        { region: '関東', rank: 3, percentage: 35 },
        { region: '中部', rank: 1, percentage: 38 },
        { region: '関西', rank: 4, percentage: 25 },
      ],
      '宝鐘マリン': [
        { region: '関西', rank: 2, percentage: 36 },
        { region: '関東', rank: 5, percentage: 25 },
        { region: '九州', rank: 3, percentage: 30 },
      ],
      '大空スバル': [
        { region: '関東', rank: 4, percentage: 30 },
        { region: '東北', rank: 3, percentage: 32 },
        { region: '中部', rank: 3, percentage: 29 },
      ],
      '星街すいせい': [
        { region: '関東', rank: 2, percentage: 37 },
        { region: '北海道', rank: 3, percentage: 28 },
        { region: '関西', rank: 4, percentage: 26 },
      ],
      '不知火フレア': [
        { region: '九州', rank: 2, percentage: 35 },
        { region: '関西', rank: 3, percentage: 32 },
        { region: '中部', rank: 4, percentage: 27 },
      ],
      '雪花ラミィ': [
        { region: '北海道', rank: 2, percentage: 33 },
        { region: '東北', rank: 1, percentage: 36 },
        { region: '関東', rank: 6, percentage: 22 },
      ],
      '猫又おかゆ': [
        { region: '関東', rank: 5, percentage: 26 },
        { region: '関西', rank: 6, percentage: 23 },
        { region: '中部', rank: 5, percentage: 24 },
      ],
      '博衣こより': [
        { region: '関東', rank: 7, percentage: 20 },
        { region: '関西', rank: 7, percentage: 21 },
        { region: '九州', rank: 5, percentage: 23 },
      ],
      // デフォルトデータ
      'default': [
        { region: '関東', rank: 1, percentage: 40 },
        { region: '関西', rank: 2, percentage: 30 },
        { region: '九州', rank: 3, percentage: 25 },
      ]
    };
    
    return mockData[holomemName] || mockData.default;
  };

  const getTrendData = (holomemName) => {
    // 各ホロメンに応じたトレンドデータ
    const mockData = {
      '天音かなた': { weeklyChange: +5, monthlyChange: -2 },
      '白上フブキ': { weeklyChange: -3, monthlyChange: +4 },
      'さくらみこ': { weeklyChange: +2, monthlyChange: +7 },
      '戌神ころね': { weeklyChange: 0, monthlyChange: -5 },
      '兎田ぺこら': { weeklyChange: +8, monthlyChange: +3 },
      '宝鐘マリン': { weeklyChange: +3, monthlyChange: -1 },
      '大空スバル': { weeklyChange: -2, monthlyChange: +2 },
      '星街すいせい': { weeklyChange: +4, monthlyChange: +1 },
      '不知火フレア': { weeklyChange: -1, monthlyChange: -3 },
      '雪花ラミィ': { weeklyChange: +6, monthlyChange: +4 },
      '猫又おかゆ': { weeklyChange: -4, monthlyChange: -2 },
      '博衣こより': { weeklyChange: +7, monthlyChange: +9 },
      // デフォルトデータ
      'default': { weeklyChange: 0, monthlyChange: 0 }
    };
    
    return mockData[holomemName] || mockData.default;
  };

  const getEventTypeData = (holomemName) => {
    // 各大会タイプを定義（将来的に拡張可能）
    const eventTypes = {
      exstreamer: { name: 'エクストリーマーカップ', key: 'exstreamer' },
      shop: { name: 'ショップ大会', key: 'shop' },
      social: { name: '交流会', key: 'social' },
      // 将来的に追加予定の大会タイプ
      // trio: { name: 'トリオ大会', key: 'trio' },
      // bloom: { name: 'ブルームカップ', key: 'bloom' },
      // wgp: { name: 'WGP', key: 'wgp' },
    };
    
    // 各ホロメンに応じた大会タイプ別データ
    const mockData = {
      '天音かなた': { exstreamer: 40, shop: 32, social: 28 },
      '白上フブキ': { exstreamer: 35, shop: 38, social: 27 },
      'さくらみこ': { exstreamer: 45, shop: 25, social: 30 },
      '戌神ころね': { exstreamer: 28, shop: 35, social: 37 },
      '兎田ぺこら': { exstreamer: 37, shop: 30, social: 33 },
      '宝鐘マリン': { exstreamer: 30, shop: 33, social: 37 },
      '大空スバル': { exstreamer: 32, shop: 31, social: 37 },
      '星街すいせい': { exstreamer: 36, shop: 29, social: 35 },
      '不知火フレア': { exstreamer: 27, shop: 34, social: 39 },
      '雪花ラミィ': { exstreamer: 29, shop: 32, social: 39 },
      '猫又おかゆ': { exstreamer: 31, shop: 28, social: 41 },
      '博衣こより': { exstreamer: 38, shop: 26, social: 36 },
      // デフォルトデータ
      'default': { exstreamer: 35, shop: 30, social: 35 }
    };

    // ホロメンのデータを取得
    const holomemData = mockData[holomemName] || mockData.default;
    
    // 表示用のデータに変換
    return Object.keys(eventTypes).map(key => ({
      name: eventTypes[key].name,
      value: holomemData[key] || 0,
      key: key
    }));
  };

  // 地域データを取得
  const regionalData = getRegionalData(holomem.name);
  // トレンドデータを取得
  const trendData = getTrendData(holomem.name);
  // 大会タイプデータを取得
  const eventTypeData = getEventTypeData(holomem.name);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{holomem.name}</Text>
      
      {/* 地域別分布 */}
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>地域別人気:</Text>
        <View style={styles.regionalContainer}>
          {regionalData.map((item, index) => (
            <View key={index} style={styles.regionalItem}>
              <Text style={styles.regionalName}>{item.region}</Text>
              <Text style={styles.regionalRank}>
                {item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : `${item.rank}位`}
              </Text>
              <Text style={styles.regionalPercentage}>{item.percentage}%</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* 使用トレンド */}
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>使用トレンド:</Text>
        <View style={styles.trendContainer}>
          <View style={styles.trendItem}>
            <Text style={styles.trendLabel}>先週比:</Text>
            <Text style={[
              styles.trendValue, 
              trendData.weeklyChange > 0 ? styles.trendUp : 
              trendData.weeklyChange < 0 ? styles.trendDown : 
              styles.trendNeutral
            ]}>
              {trendData.weeklyChange > 0 ? '↑' : trendData.weeklyChange < 0 ? '↓' : '→'} 
              {Math.abs(trendData.weeklyChange)}%
            </Text>
          </View>
          <View style={styles.trendItem}>
            <Text style={styles.trendLabel}>先月比:</Text>
            <Text style={[
              styles.trendValue, 
              trendData.monthlyChange > 0 ? styles.trendUp : 
              trendData.monthlyChange < 0 ? styles.trendDown : 
              trendData.monthlyChange === 0 ? styles.trendNeutral : 
              styles.trendNeutral
            ]}>
              {trendData.monthlyChange > 0 ? '↑' : trendData.monthlyChange < 0 ? '↓' : '→'} 
              {Math.abs(trendData.monthlyChange)}%
            </Text>
          </View>
        </View>
      </View>
      
      {/* 大会タイプ別の採用率 */}
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>大会タイプ別採用率:</Text>
        <ScrollView 
          horizontal={eventTypeData.length > 3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.eventTypeScrollContainer}
        >
          <View style={styles.eventTypeContainer}>
            {eventTypeData.map((item, index) => (
              <View key={index} style={styles.eventTypeItem}>
                <Text style={styles.eventTypeName}>{item.name}:</Text>
                <Text style={styles.eventTypeValue}>{item.value}%</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// スタイル
const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  detailRow: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
    marginBottom: 5,
  },
  // 地域別分布のスタイル
  regionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  regionalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 5,
    width: '30%',
  },
  regionalName: {
    fontSize: 13,
    color: COLORS.text,
    marginRight: 5,
  },
  regionalRank: {
    fontSize: 13,
    marginRight: 5,
  },
  regionalPercentage: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  // 使用トレンドのスタイル
  trendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  trendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  trendLabel: {
    fontSize: 13,
    color: COLORS.text,
    marginRight: 5,
  },
  trendValue: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  trendUp: {
    color: '#4CAF50', // 緑
  },
  trendDown: {
    color: '#F44336', // 赤
  },
  trendNeutral: {
    color: COLORS.text,
  },
  // 大会タイプ別採用率のスタイル
  eventTypeScrollContainer: {
    paddingRight: 10,
  },
  eventTypeContainer: {
    flexDirection: 'column',
  },
  eventTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventTypeName: {
    fontSize: 13,
    color: COLORS.text,
    width: 160,
  },
  eventTypeValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
};

export default HolomemDetailCard;
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Linking, TextInput } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { COLORS } from '../styles/colors';

/**
 * 動画一覧画面コンポーネント
 * 関連動画リンクを表示する画面
 * 
 * @returns {JSX.Element} 動画一覧画面コンポーネント
 */
const VideosScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // サンプル動画データ
  const videoData = [
    {
      id: '1',
      title: 'ホロライブTCG公式動画：基本ルール解説',
      channel: '公式チャンネル',
      date: '2025年2月15日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video1',
      category: 'tutorial'
    },
    {
      id: '2',
      title: '【ホロカ】初心者向けデッキ構築ガイド',
      channel: 'カードゲームチャンネル',
      date: '2025年2月20日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video2',
      category: 'guide'
    },
    {
      id: '3',
      title: 'エクストリーマーカップ2025予選大会ハイライト',
      channel: 'ホロカ公式大会',
      date: '2025年3月1日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video3',
      category: 'tournament'
    },
    {
      id: '4',
      title: '最新拡張パック「ホロメン・レジェンド」開封レビュー',
      channel: 'カードゲームマスター',
      date: '2025年3月2日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video4',
      category: 'review'
    },
    {
      id: '5',
      title: 'プロプレイヤーによる大会優勝デッキ解説',
      channel: 'プロカードプレイヤー',
      date: '2025年3月5日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video5',
      category: 'guide'
    },
    {
      id: '6',
      title: 'ホロライブTCGオンライン対戦実況',
      channel: 'ゲーム実況チャンネル',
      date: '2025年3月7日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video6',
      category: 'gameplay'
    },
    {
      id: '7',
      title: '初心者必見！カードゲームの基本戦略',
      channel: 'TCG学習チャンネル',
      date: '2025年2月25日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video7',
      category: 'tutorial'
    },
    {
      id: '8',
      title: '大会公式：東京ホロライブ大会ダイジェスト',
      channel: '公式チャンネル',
      date: '2025年3月3日',
      thumbnail: 'https://via.placeholder.com/120x80',
      url: 'https://example.com/video8',
      category: 'tournament'
    }
  ];

  // 検索とフィルタリングを適用したデータを取得
  const getFilteredData = () => {
    return videoData.filter(item => {
      // 検索テキストでフィルタリング
      const matchesSearch = searchText === '' || 
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.channel.toLowerCase().includes(searchText.toLowerCase());
      
      // カテゴリでフィルタリング
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  };

  // 動画アイテムをタップしたときの処理
  const handleVideoPress = (url) => {
    Linking.openURL(url).catch(err => console.error('URLを開けませんでした', err));
  };

  // 動画アイテムのレンダリング
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => handleVideoPress(item.url)}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.channelName}>{item.channel}</Text>
        <Text style={styles.videoDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = getFilteredData();

  return (
    <View style={commonStyles.screen}>
      <Text style={commonStyles.title}>動画一覧</Text>
      <Text style={commonStyles.subtitle}>関連動画リンク</Text>
      
      {/* 検索バー */}
      <View style={commonStyles.searchContainer}>
        <View style={commonStyles.searchBar}>
          <Text style={commonStyles.searchIcon}>🔍</Text>
          <TextInput
            style={commonStyles.searchInput}
            placeholder="タイトルやチャンネル名で検索"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText !== '' && (
            <TouchableOpacity 
              style={commonStyles.clearButton}
              onPress={() => setSearchText('')}
            >
              <Text style={commonStyles.clearButtonText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {/* カテゴリー選択 */}
      <View style={styles.categoryContainer}>
        <ScrollableCategories 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>
      
      {/* 検索結果数の表示 */}
      <View style={commonStyles.resultsCountContainer}>
        <Text style={commonStyles.resultsCount}>{filteredData.length}件の動画</Text>
      </View>
      
      {/* 動画リスト */}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderVideoItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={commonStyles.noResultsContainer}>
          <Text style={commonStyles.noResultsText}>条件に一致する動画はありません</Text>
          <TouchableOpacity 
            style={commonStyles.resetButton}
            onPress={() => {
              setSearchText('');
              setSelectedCategory('all');
            }}
          >
            <Text style={commonStyles.resetButtonText}>検索条件をリセット</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// カテゴリー選択コンポーネント
const ScrollableCategories = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { id: 'all', name: '全て' },
    { id: 'tutorial', name: 'チュートリアル' },
    { id: 'guide', name: 'ガイド' },
    { id: 'review', name: 'レビュー' },
    { id: 'tournament', name: '大会' },
    { id: 'gameplay', name: 'ゲームプレイ' }
  ];
  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesScrollView}
    >
      {categories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            selectedCategory === category.id && styles.selectedCategoryButton
          ]}
          onPress={() => onSelectCategory(category.id)}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === category.id && styles.selectedCategoryButtonText
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// スタイル
const styles = {
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  videoItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  videoInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  channelName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  videoDate: {
    fontSize: 12,
    color: '#999',
  },
  categoryContainer: {
    marginBottom: 15,
    height: 40,
  },
  categoriesScrollView: {
    paddingHorizontal: 15,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: COLORS.primary,
  },
  categoryButtonText: {
    fontSize: 13,
    color: '#666',
  },
  selectedCategoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

// ScrollViewのインポートを追加
import { ScrollView } from 'react-native';

export default VideosScreen;
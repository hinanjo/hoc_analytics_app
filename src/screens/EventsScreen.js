import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { tournamentData } from '../data/tournamentData';
import { COLORS } from '../styles/colors';

// 大会情報画面コンポーネント
const EventsScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    eventType: 'all', // 'all', 'exstreamer', 'shop'
    region: 'all',    // 'all', '関東', '関西', etc.
    hasHolomenCards: false
  });

  // フィルタリングと検索を適用したデータを取得
  const getFilteredData = () => {
    return tournamentData.filter(item => {
      // 検索テキストでフィルタリング
      const matchesSearch = searchText === '' || 
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.location.toLowerCase().includes(searchText.toLowerCase()) ||
        item.organizer.toLowerCase().includes(searchText.toLowerCase());
      
      // イベントタイプでフィルタリング
      const matchesEventType = filters.eventType === 'all' || 
        (filters.eventType === 'exstreamer' && item.type === 'エクストリーマーカップ') ||
        (filters.eventType === 'shop' && item.type === 'ショップ大会');
      
      // 地域でフィルタリング
      const matchesRegion = filters.region === 'all' || item.region === filters.region;
      
      // 推しホロメンカードの有無でフィルタリング
      const matchesHolomenCards = !filters.hasHolomenCards || item.hasHolomenCards;
      
      return matchesSearch && matchesEventType && matchesRegion && matchesHolomenCards;
    });
  };

  // 大会を選択したときの処理
  const handleEventPress = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  // フィルターを適用する処理
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setFilterVisible(false);
  };

  // フィルターモーダルのコンポーネント
  const FilterModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={filterVisible}
      onRequestClose={() => setFilterVisible(false)}
    >
      <View style={commonStyles.modalOverlay}>
        <View style={commonStyles.modalContent}>
          <Text style={commonStyles.modalTitle}>検索フィルター</Text>
          
          <View style={commonStyles.modalSection}>
            <Text style={commonStyles.modalSectionTitle}>大会タイプ</Text>
            <View style={commonStyles.filterOptions}>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.eventType === 'all' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, eventType: 'all'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.eventType === 'all' && commonStyles.activeFilterOptionText]}>全て</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.eventType === 'exstreamer' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, eventType: 'exstreamer'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.eventType === 'exstreamer' && commonStyles.activeFilterOptionText]}>エクストリーマーカップ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.eventType === 'shop' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, eventType: 'shop'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.eventType === 'shop' && commonStyles.activeFilterOptionText]}>ショップ大会</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={commonStyles.modalSection}>
            <Text style={commonStyles.modalSectionTitle}>地域</Text>
            <View style={commonStyles.filterOptions}>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === 'all' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: 'all'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === 'all' && commonStyles.activeFilterOptionText]}>全国</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '北海道' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '北海道'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '北海道' && commonStyles.activeFilterOptionText]}>北海道</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '東北' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '東北'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '東北' && commonStyles.activeFilterOptionText]}>東北</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '関東' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '関東'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '関東' && commonStyles.activeFilterOptionText]}>関東</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '中部' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '中部'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '中部' && commonStyles.activeFilterOptionText]}>中部</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '北陸' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '北陸'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '北陸' && commonStyles.activeFilterOptionText]}>北陸</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '関西' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '関西'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '関西' && commonStyles.activeFilterOptionText]}>関西</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '四国' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '四国'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '四国' && commonStyles.activeFilterOptionText]}>四国</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '九州' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '九州'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '九州' && commonStyles.activeFilterOptionText]}>九州</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[commonStyles.filterOption, filters.region === '沖縄' && commonStyles.activeFilterOption]}
                onPress={() => setFilters({...filters, region: '沖縄'})}
              >
                <Text style={[commonStyles.filterOptionText, filters.region === '沖縄' && commonStyles.activeFilterOptionText]}>沖縄</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={commonStyles.modalSection}>
            <Text style={commonStyles.modalSectionTitle}>その他</Text>
            <View style={commonStyles.checkboxContainer}>
              <TouchableOpacity
                style={commonStyles.checkbox}
                onPress={() => setFilters({...filters, hasHolomenCards: !filters.hasHolomenCards})}
              >
                <View style={[commonStyles.checkboxBox, filters.hasHolomenCards && commonStyles.checkboxChecked]} />
                <Text style={commonStyles.checkboxLabel}>推しホロメンカードがあるイベントのみ表示</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={commonStyles.filterButtons}>
            <TouchableOpacity
              style={[commonStyles.filterButton, commonStyles.cancelButton]}
              onPress={() => setFilterVisible(false)}
            >
              <Text style={commonStyles.cancelButtonText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[commonStyles.filterButton, commonStyles.applyButton]}
              onPress={() => applyFilters(filters)}
            >
              <Text style={commonStyles.applyButtonText}>適用する</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  // 大会カードのレンダリング
  const renderEventCard = ({ item }) => (
    <TouchableOpacity
      style={commonStyles.eventCard}
      onPress={() => handleEventPress(item)}
    >
      <View style={commonStyles.eventHeader}>
        <Text style={commonStyles.eventName}>{item.name}</Text>
        <View style={[
          commonStyles.eventTypeContainer, 
          item.type === 'エクストリーマーカップ' ? commonStyles.exstreamerType : commonStyles.shopType
        ]}>
          <Text style={commonStyles.eventType}>{item.type}</Text>
        </View>
      </View>
      
      <View style={commonStyles.eventDetails}>
        <Text style={commonStyles.eventDate}>{item.date}</Text>
        <Text style={commonStyles.eventLocation}>{item.location}</Text>
        <Text style={commonStyles.eventOrganizer}>主催: {item.organizer}</Text>
      </View>
      
      <View style={commonStyles.eventIndicators}>
        {item.url !== 'なし' && (
          <View style={commonStyles.indicator}>
            <Text style={commonStyles.indicatorText}>URLあり</Text>
          </View>
        )}
        {item.hasHolomenCards && (
          <View style={[commonStyles.indicator, commonStyles.holomenIndicator]}>
            <Text style={commonStyles.indicatorText}>推しホロメンあり</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  // 大会詳細モーダル
  const renderEventModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      {selectedEvent && (
        <View style={commonStyles.modalOverlay}>
          <View style={commonStyles.modalContent}>
            <ScrollView contentContainerStyle={commonStyles.modalScrollContent}>
              <Text style={commonStyles.modalTitle}>{selectedEvent.name}</Text>
              
              <View style={commonStyles.modalSection}>
                <Text style={commonStyles.modalSectionTitle}>大会情報</Text>
                <View style={commonStyles.modalDetail}>
                  <Text style={commonStyles.modalLabel}>日時:</Text>
                  <Text style={commonStyles.modalValue}>{selectedEvent.date}</Text>
                </View>
                <View style={commonStyles.modalDetail}>
                  <Text style={commonStyles.modalLabel}>場所:</Text>
                  <Text style={commonStyles.modalValue}>{selectedEvent.location}</Text>
                </View>
                <View style={commonStyles.modalDetail}>
                  <Text style={commonStyles.modalLabel}>主催:</Text>
                  <Text style={commonStyles.modalValue}>{selectedEvent.organizer}</Text>
                </View>
                <View style={commonStyles.modalDetail}>
                  <Text style={commonStyles.modalLabel}>種類:</Text>
                  <Text style={commonStyles.modalValue}>{selectedEvent.type}</Text>
                </View>
                <View style={commonStyles.modalDetail}>
                  <Text style={commonStyles.modalLabel}>地域:</Text>
                  <Text style={commonStyles.modalValue}>{selectedEvent.region}</Text>
                </View>
              </View>
              
              <View style={commonStyles.modalSection}>
                <Text style={commonStyles.modalSectionTitle}>リンク</Text>
                {selectedEvent.url !== 'なし' ? (
                  <View style={commonStyles.modalDetail}>
                    <Text style={commonStyles.modalLabel}>URL:</Text>
                    <Text style={commonStyles.modalLinkValue}>{selectedEvent.url}</Text>
                  </View>
                ) : (
                  <Text style={commonStyles.noDataText}>リンク情報はありません</Text>
                )}
              </View>
              
              <View style={commonStyles.modalSection}>
                <Text style={commonStyles.modalSectionTitle}>追加情報</Text>
                <View style={commonStyles.modalIndicators}>
                  {selectedEvent.hasRecipe ? (
                    <View style={commonStyles.modalIndicator}>
                      <Text style={commonStyles.modalIndicatorText}>デッキレシピあり</Text>
                    </View>
                  ) : (
                    <View style={[commonStyles.modalIndicator, commonStyles.modalDisabledIndicator]}>
                      <Text style={commonStyles.modalDisabledIndicatorText}>デッキレシピなし</Text>
                    </View>
                  )}
                  
                  {selectedEvent.hasHolomenCards ? (
                    <View style={[commonStyles.modalIndicator, commonStyles.modalHolomenIndicator]}>
                      <Text style={commonStyles.modalIndicatorText}>推しホロメンあり</Text>
                    </View>
                  ) : (
                    <View style={[commonStyles.modalIndicator, commonStyles.modalDisabledIndicator]}>
                      <Text style={commonStyles.modalDisabledIndicatorText}>推しホロメンなし</Text>
                    </View>
                  )}
                </View>
              </View>
              
              <TouchableOpacity
                style={commonStyles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={commonStyles.closeButtonText}>閉じる</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </Modal>
  );

  const filteredData = getFilteredData();

  return (
    <View style={commonStyles.screen}>
      <Text style={commonStyles.screenTitle}>大会情報</Text>
      <Text style={commonStyles.screenSubtitle}>過去の大会一覧</Text>
      
      {/* 検索バーとフィルターボタン */}
      <View style={commonStyles.searchContainer}>
        <View style={commonStyles.searchBar}>
          <Text style={commonStyles.searchIcon}>🔍</Text>
          <TextInput
            style={commonStyles.searchInput}
            placeholder="大会名、開催場所、主催者などで検索"
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
        <TouchableOpacity 
          style={commonStyles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={commonStyles.filterButtonText}>フィルター</Text>
        </TouchableOpacity>
      </View>
      
      {/* フィルター適用中の表示 */}
      {(filters.eventType !== 'all' || filters.region !== 'all' || filters.hasHolomenCards) && (
        <View style={commonStyles.activeFiltersContainer}>
          <Text style={commonStyles.activeFiltersTitle}>適用中のフィルター：</Text>
          <View style={commonStyles.activeFiltersList}>
            {filters.eventType !== 'all' && (
              <View style={commonStyles.activeFilterTag}>
                <Text style={commonStyles.activeFilterText}>
                  {filters.eventType === 'exstreamer' ? 'エクストリーマーカップ' : 'ショップ大会'}
                </Text>
              </View>
            )}
            {filters.region !== 'all' && (
              <View style={commonStyles.activeFilterTag}>
                <Text style={commonStyles.activeFilterText}>{filters.region}</Text>
              </View>
            )}
            {filters.hasHolomenCards && (
              <View style={commonStyles.activeFilterTag}>
                <Text style={commonStyles.activeFilterText}>推しホロメンあり</Text>
              </View>
            )}
            <TouchableOpacity 
              style={commonStyles.clearFiltersButton}
              onPress={() => setFilters({eventType: 'all', region: 'all', hasHolomenCards: false})}
            >
              <Text style={commonStyles.clearFiltersText}>クリア</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      {/* 検索結果数の表示 */}
      <View style={commonStyles.resultsCountContainer}>
        <Text style={commonStyles.resultsCount}>{filteredData.length}件の大会</Text>
      </View>
      
      {/* 大会一覧 */}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderEventCard}
          keyExtractor={item => item.id}
          contentContainerStyle={commonStyles.listContainer}
        />
      ) : (
        <View style={commonStyles.noResultsContainer}>
          <Text style={commonStyles.noResultsText}>条件に一致する大会はありません</Text>
          <TouchableOpacity 
            style={commonStyles.resetButton}
            onPress={() => {
              setSearchText('');
              setFilters({eventType: 'all', region: 'all', hasHolomenCards: false});
            }}
          >
            <Text style={commonStyles.resetButtonText}>検索条件をリセット</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* フィルターモーダル */}
      <FilterModal />
      
      {/* 大会詳細モーダル */}
      {renderEventModal()}
    </View>
  );
};

export default EventsScreen;
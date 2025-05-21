import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import commonStyles from '../styles/commonStyles';

/**
 * フィルターモーダルコンポーネント
 * 大会情報の検索フィルター用モーダルウィンドウ
 * 
 * @param {boolean} visible - モーダルの表示状態
 * @param {Object} filters - 現在のフィルター設定
 * @param {Function} setFilters - フィルター設定を更新する関数
 * @param {Function} onApply - フィルター適用時のコールバック関数
 * @param {Function} onClose - モーダルを閉じる関数
 * @returns {JSX.Element} フィルターモーダルコンポーネント
 */
const FilterModal = ({ visible, filters, setFilters, onApply, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
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
              onPress={onClose}
            >
              <Text style={commonStyles.cancelButtonText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[commonStyles.filterButton, commonStyles.applyButton]}
              onPress={() => onApply(filters)}
            >
              <Text style={commonStyles.applyButtonText}>適用する</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
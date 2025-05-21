import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/commonStyles';

/**
 * 期間選択コンポーネント
 * 日間/週間/月間/年間の期間を選択するボタングループ
 * 
 * @param {string} activePeriod - 現在選択されている期間
 * @param {Function} onSelectPeriod - 期間選択時のコールバック関数
 * @returns {JSX.Element} 期間選択コンポーネント
 */
const PeriodSelector = ({ activePeriod, onSelectPeriod }) => {
  return (
    <View style={commonStyles.periodSelector}>
      <TouchableOpacity
        style={[commonStyles.periodButton, activePeriod === 'day' && commonStyles.activePeriodButton]}
        onPress={() => onSelectPeriod('day')}
      >
        <Text style={[commonStyles.periodButtonText, activePeriod === 'day' && commonStyles.activePeriodButtonText]}>日間</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[commonStyles.periodButton, activePeriod === 'week' && commonStyles.activePeriodButton]}
        onPress={() => onSelectPeriod('week')}
      >
        <Text style={[commonStyles.periodButtonText, activePeriod === 'week' && commonStyles.activePeriodButtonText]}>週間</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[commonStyles.periodButton, activePeriod === 'month' && commonStyles.activePeriodButton]}
        onPress={() => onSelectPeriod('month')}
      >
        <Text style={[commonStyles.periodButtonText, activePeriod === 'month' && commonStyles.activePeriodButtonText]}>月間</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[commonStyles.periodButton, activePeriod === 'year' && commonStyles.activePeriodButton]}
        onPress={() => onSelectPeriod('year')}
      >
        <Text style={[commonStyles.periodButtonText, activePeriod === 'year' && commonStyles.activePeriodButtonText]}>年間</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PeriodSelector;
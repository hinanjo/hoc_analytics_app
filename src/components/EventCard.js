import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/commonStyles';

/**
 * イベントカードコンポーネント
 * 大会情報を表示するカードUIコンポーネント
 * 
 * @param {Object} item - 大会データオブジェクト
 * @param {Function} onPress - カードタップ時のコールバック関数
 * @returns {JSX.Element} イベントカードコンポーネント
 */
const EventCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={commonStyles.eventCard}
      onPress={() => onPress(item)}
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
};

export default EventCard;
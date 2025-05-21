import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';

/**
 * カスタム凡例コンポーネント
 * 
 * @param {Array} data - 凡例データ
 * @returns {JSX.Element}
 */
const CustomLegend = ({ data }) => (
  <View style={styles.legendContainer}>
    {data.map((item, index) => (
      <View key={index} style={styles.legendItem}>
        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
        <Text style={styles.legendText}>{item.name} ({item.population}%)</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  legendContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default CustomLegend;
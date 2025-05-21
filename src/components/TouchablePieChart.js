import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { COLORS } from '../styles/colors';

const TouchablePieChart = ({ data, width, chartConfig, onChartPress, displayMode }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onChartPress}
        style={styles.touchableArea}
      >
        <PieChart
          data={data}
          width={width}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <View style={styles.hintContainer}>
          <Text style={styles.hintText}>
            {displayMode === 'top5' 
              ? 'タップしてその他の詳細を表示' 
              : '　タップしてトップ5に戻る　'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  touchableArea: {
    position: 'relative',
  },
  hintContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
    borderRadius: 15,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    // 凡例の位置を考慮
    left: '6%', // グラフの左側に寄せる
    maxWidth: 180,
  },
  hintText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'left',
  }
});

export default TouchablePieChart;
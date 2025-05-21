import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import StatsScreen from '../screens/StatsScreen';
import VideosScreen from '../screens/VideosScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { COLORS } from '../styles/colors';

// タブナビゲーションの作成
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Graph"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          },
          tabBarItemStyle: {
            // デフォルトのタブスタイル
          },
          tabBarIcon: ({ focused, color }) => {
            // カスタムアイコンの設定（必要に応じて）
            return null;
          },
          tabBarLabelStyle: route.name === 'Graph' ? {
            // グラフタブのラベルスタイル
            fontSize: 14, // 他のタブより大きいフォント
            fontWeight: 'bold',
          } : {
            // 他のタブのラベルスタイル
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen 
          name="Videos" 
          component={VideosScreen} 
          options={{ 
            title: '動画',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
            tabBarItemStyle: {
              // 通常のタブのサイズ
            }
          }} 
        />
        <Tab.Screen 
          name="Events" 
          component={EventsScreen} 
          options={{ 
            title: '大会情報',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
          }} 
        />
        <Tab.Screen 
          name="Graph" 
          component={HomeScreen} 
          options={{ 
            title: 'グラフ',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
            tabBarItemStyle: {
              // グラフタブを大きくする
              height: 60,
              marginTop: -10, // 少し上に出す
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: '#e6f8f9', // 薄い水色の背景
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: COLORS.primary,
            }
          }} 
        />
        <Tab.Screen 
          name="Stats" 
          component={StatsScreen} 
          options={{ 
            title: 'ランキング',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ 
            title: '設定',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { COLORS } from '../styles/colors';

/**
 * 設定画面コンポーネント
 * アプリの設定や情報を表示・編集する画面
 * 
 * @returns {JSX.Element} 設定画面コンポーネント
 */
const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <View style={commonStyles.screen}>
      <Text style={commonStyles.screenTitle}>設定</Text>
      <Text style={commonStyles.screenSubtitle}>アプリの設定を変更</Text>
      
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.settingsContainer}>
          {/* 通知設定 */}
          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>通知</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>大会情報の通知</Text>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#ccc', true: COLORS.primary }}
              />
            </View>
          </View>
          
          {/* 表示設定 */}
          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>表示設定</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>ダークモード</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#ccc', true: COLORS.primary }}
              />
            </View>
          </View>
          
          {/* アプリ情報 */}
          <View style={styles.settingSection}>
            <Text style={styles.sectionTitle}>アプリ情報</Text>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>バージョン</Text>
              <Text style={styles.infoValue}>1.0.0</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>開発</Text>
              <Text style={styles.infoValue}>HOLOLIVEファンチーム</Text>
            </View>
          </View>
          
          {/* その他のボタン */}
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>お問い合わせ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>プライバシーポリシー</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>利用規約</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// スタイル
const styles = {
  settingsContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  settingSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: COLORS.text,
  },
  infoItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: COLORS.lightText,
    width: 100,
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
  },
  buttonSection: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primary,
  }
};

export default SettingsScreen;
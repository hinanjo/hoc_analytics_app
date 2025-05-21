// sampleData.js

// ホロメンデータの定義
const holomembers = [
    { id: '1', name: 'ときのそら', color: '#0146EA' },
    { id: '2', name: 'ロボ子さん', color: '#804E7F' },
    { id: '3', name: 'さくらみこ', color: '#FE4B74' },
    { id: '4', name: '星街すいせい', color: '#2dcde4' },
    { id: '5', name: 'AZKi', color: '#d11c76' },
    { id: '6', name: '夜空メル', color: '#ffc004' },
    { id: '7', name: 'アキ・ローゼンタール', color: '#dc0485' },
    { id: '8', name: '赤井はあと', color: '#d9062a' },
    { id: '9', name: '白上フブキ', color: '#53c7ea' },
    { id: '10', name: '夏色まつり', color: '#ff5606' },
    { id: '11', name: '湊あくあ', color: '#fe5dd8' },
    { id: '12', name: '紫咲シオン', color: '#8a54cb' },
    { id: '13', name: '百鬼あやめ', color: '#ca223a' },
    { id: '14', name: '癒月ちょこ', color: '#dc5686' },
    { id: '15', name: '大空スバル', color: '#bde717' },
    { id: '16', name: '大神ミオ', color: '#dc1935' },
    { id: '17', name: '猫又おかゆ', color: '#bf65e8' },
    { id: '18', name: '戌神ころね', color: '#dcb414' },
    { id: '19', name: '兎田ぺこら', color: '#65baea' },
    { id: '20', name: '潤羽るしあ', color: '#0de1bd' },
    { id: '21', name: '不知火フレア', color: '#dc3813' },
    { id: '22', name: '白銀ノエル', color: '#89939d' },
    { id: '23', name: '宝鐘マリン', color: '#a72413' },
    { id: '24', name: '天音かなた', color: '#76c0ea' },
    { id: '25', name: '桐生ココ', color: '#db7311' },
    { id: '26', name: '角巻わため', color: '#dbda89' },
    { id: '27', name: '常闇トワ', color: '#a7a2ea' },
    { id: '28', name: '姫森ルーナ', color: '#db6cad' },
    { id: '29', name: '雪花ラミィ', color: '#48b5e3' },
    { id: '30', name: '桃鈴ねね', color: '#fe7a0f' },
    { id: '31', name: '獅白ぼたん', color: '#5fcfa6' },
    { id: '32', name: '尾丸ポルカ', color: '#ab0808' },
    { id: '33', name: 'ラプラス・ダークネス', color: '#441495' },
    { id: '34', name: '鷹嶺ルイ', color: '#28040d' },
    { id: '35', name: '博衣こより', color: '#fe68ad' },
    { id: '36', name: '沙花叉クロヱ', color: '#ab0e0c' },
    { id: '37', name: '風真いろは', color: '#44bfb7' },
    { id: '38', name: 'アユンダ・リス', color: '#ef8381' },
    { id: '40', name: 'ムーナ・ホシノヴァ', color: '#784dbe' },
    { id: '41', name: 'アイラニ・イオフィフティーン', color: '#7bdf0e' },
    { id: '42', name: 'クレイジー・オリー', color: '#b7030e' },
    { id: '43', name: 'アーニャ・メルフィッサ', color: '#e89c0f' },
    { id: '44', name: 'パヴォリア・レイネ', color: '#040f7f' },
    { id: '45', name: 'ヴェスティア・ゼータ', color: '#97a1ae' },
    { id: '46', name: 'カエラ・コヴァルスキア', color: '#dc2528' },
    { id: '47', name: 'こぼ・かなえる', color: '#161c4f' },
    { id: '48', name: '森カリオペ', color: '#a1020b' },
    { id: '49', name: '小鳥遊キアラ', color: '##dc3907' },
    { id: '50', name: '一伊那尓栖', color: '#3f3e69' },
    { id: '51', name: 'がうる・ぐら', color: '#3a69b2' },
    { id: '52', name: 'ワトソン・アメリア', color: '#f2bd36' },
    { id: '53', name: 'IRyS', color: '#991150' },
    { id: '54', name: '九十九佐命', color: '#d583ab' },
    { id: '55', name: 'セレス・ファウナ', color: '#33ca66' },
    { id: '56', name: 'オーロ・クロニー', color: '#1d1797' },
    { id: '57', name: '七詩ムメイ', color: '#c29371' },
    { id: '58', name: 'ハコス・ベールズ', color: '#fe3a2d' },
    { id: '59', name: 'シオリ・ノヴェラ', color: '#8c80ae' },
    { id: '60', name: '古石ビジュー', color: '#4b43df' },
    { id: '61', name: 'ネリッサ・レイヴンクロフト', color: '#1e27ac' },
    { id: '62', name: 'フワワ・アビスガード', color: '#2d87f7' },
    { id: '63', name: 'モココ・アビスガード', color: '#ff82c9' },
    { id: '64', name: 'エリザベス・ローズ・ブラッドフレイム ', color: '#97303a' },
    { id: '65', name: 'ジジ・ムリン', color: '#cd9328' },
    { id: '66', name: 'セシリア・イマーグリーン', color: '#137a42' },
    { id: '67', name: 'ラオーラ・パンテーラ', color: '#e75786' },
    { id: '68', name: '火威青', color: '#16264b' },
    { id: '69', name: '音乃瀬奏', color: '#f6c663' },
    { id: '70', name: '一条莉々華', color: '#ee558b' },
    { id: '71', name: '儒烏風亭らでん', color: '#1c5e4f' },
    { id: '72', name: '轟はじめ', color: '#9293fe' },
    { id: '73', name: '響咲リオナ', color: '#c92654' },
    { id: '74', name: '虎金妃笑虎', color: '#f25e11' },
    { id: '75', name: '水宮枢', color: '#64cce4' },
    { id: '76', name: '輪堂千速', color: '#2c8c8b' },
    { id: '39', name: '綺々羅々ヴィヴィ', color: '#e34899' },
    { id: '38', name: 'その他', color: '#A9A9A9' }
  ];
  
  // 日次データ
  const dailyData = [
    { id: '1', name: '白上フブキ', usage: 35, winRate: 65, color: '#53c7ea' },
    { id: '2', name: '兎田ぺこら', usage: 25, winRate: 58, color: '#65baea' },
    { id: '3', name: 'さくらみこ', usage: 20, winRate: 62, color: '#FE4B74' },
    { id: '4', name: '戌神ころね', usage: 12, winRate: 54, color: '#dcb414' },
    { id: '5', name: '宝鐘マリン', usage: 8, winRate: 50, color: '#a72413' },
  ];
  
  // 週次データ
  const weeklyData = [
    { id: '1', name: '白上フブキ', usage: 30, winRate: 62, color: '#53c7ea' },
    { id: '2', name: '兎田ぺこら', usage: 22, winRate: 60, color: '#65baea' },
    { id: '3', name: 'さくらみこ', usage: 18, winRate: 58, color: '#FE4B74' },
    { id: '4', name: '戌神ころね', usage: 15, winRate: 55, color: '#dcb414' },
    { id: '5', name: '星街すいせい', usage: 10, winRate: 52, color: '#2dcde4' },
    { id: '6', name: 'その他', usage: 5, winRate: 48, color: '#A9A9A9' },
  ];
  
  // 月次データ
  const monthlyData = [
    { id: '1', name: '白上フブキ', usage: 28, winRate: 60, color: '#53c7ea' },
    { id: '2', name: '兎田ぺこら', usage: 24, winRate: 58, color: '#65baea' },
    { id: '3', name: 'さくらみこ', usage: 20, winRate: 56, color: '#FE4B74' },
    { id: '4', name: '戌神ころね', usage: 16, winRate: 54, color: '#dcb414' },
    { id: '5', name: '星街すいせい', usage: 12, winRate: 52, color: '#2dcde4' },
    { id: '6', name: '大空スバル', usage: 10, winRate: 51, color: '#bde717' },
    { id: '7', name: '不知火フレア', usage: 8, winRate: 49, color: '#dc3813' },
    { id: '8', name: 'その他', usage: 10, winRate: 45, color: '#A9A9A9' },
  ];
  
  // 年次データ
  const yearlyData = [
    { id: '1', name: '白上フブキ', usage: 25, winRate: 58, color: '#53c7ea' },
    { id: '2', name: '兎田ぺこら', usage: 23, winRate: 56, color: '#65baea' },
    { id: '3', name: 'さくらみこ', usage: 22, winRate: 55, color: '#FE4B74' },
    { id: '4', name: '戌神ころね', usage: 18, winRate: 53, color: '#dcb414' },
    { id: '5', name: '星街すいせい', usage: 12, winRate: 51, color: '#2dcde4' },
    { id: '6', name: '大空スバル', usage: 11, winRate: 50, color: '#bde717' },
    { id: '7', name: '不知火フレア', usage: 10, winRate: 48, color: '#dc3813' },
    { id: '8', name: '宝鐘マリン', usage: 9, winRate: 47, color: '#a72413' },
    { id: '9', name: '天音かなた', usage: 8, winRate: 45, color: '#76c0ea' },
    { id: '10', name: 'その他', usage: 12, winRate: 42, color: '#A9A9A9' },
  ];
  
  // トレンドデータ（過去3ヶ月の月別推移）
  const trendData = {
    months: ['2025年1月', '2025年2月', '2025年3月'],
    data: [
      { name: '白上フブキ', values: [22, 25, 28], color: '#53c7ea' },
      { name: '兎田ぺこら', values: [18, 21, 24], color: '#65baea' },
      { name: 'さくらみこ', values: [15, 18, 20], color: '#FE4B74' },
      { name: '戌神ころね', values: [12, 14, 16], color: '#dcb414' },
      { name: '星街すいせい', values: [8, 10, 12], color: '#2dcde4' },
    ]
  };
  
  // デッキタイプの分布データ
  const deckTypes = [
    { id: '1', name: 'アグロ', percentage: 35, color: '#d9062a' },
    { id: '2', name: 'ミッドレンジ', percentage: 25, color: '#dcb414' },
    { id: '3', name: 'コントロール', percentage: 20, color: '#53c7ea' },
    { id: '4', name: 'コンボ', percentage: 15, color: '#8a54cb' },
    { id: '5', name: 'その他', percentage: 5, color: '#A9A9A9' },
  ];
  
  // エクスポート
  export const sampleData = {
    holomembers,
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
    trends: trendData,
    deckTypes
  };
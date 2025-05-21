// ホロメンカラーコード
const holomemColors = {
  'ときのそら': '#0146EA',
  'ロボ子さん': '#804E7F',
  'さくらみこ': '#FE4B74',
  '星街すいせい': '#2dcde4',
  'AZKi': '#d11c76',
  '夜空メル': '#ffc004',
  'アキ・ローゼンタール': '#dc0485',
  '赤井はあと': '#d9062a',
  '白上フブキ': '#53c7ea',
  '夏色まつり': '#ff5606',
  '湊あくあ': '#fe5dd8',
  '紫咲シオン': '#8a54cb',
  '百鬼あやめ': '#ca223a',
  '癒月ちょこ': '#dc5686',
  '大空スバル': '#bde717',
  '大神ミオ': '#dc1935',
  '猫又おかゆ': '#bf65e8',
  '戌神ころね': '#dcb414',
  '兎田ぺこら': '#65baea',
  '潤羽るしあ': '#0de1bd',
  '不知火フレア': '#dc3813',
  '白銀ノエル': '#89939d',
  '宝鐘マリン': '#a72413',
  '天音かなた': '#76c0ea',
  '桐生ココ': '#db7311',
  '角巻わため': '#dbda89',
  '常闇トワ': '#a7a2ea',
  '姫森ルーナ': '#db6cad',
  '雪花ラミィ': '#48b5e3',
  '桃鈴ねね': '#fe7a0f',
  '獅白ぼたん': '#5fcfa6',
  '尾丸ポルカ': '#ab0808',
  'ラプラス・ダークネス': '#441495',
  '鷹嶺ルイ': '#28040d',
  '博衣こより': '#fe68ad',
  '沙花叉クロヱ': '#ab0e0c',
  '風真いろは': '#44bfb7'
};

// 大会データ
const tournamentData = [
  {
    id: '1',
    url: 'https://x.com/HBSTkawasaki/status/1897934921941008648',
    deckName: 'かなた単',
    region: '神奈川',
    participants: 26,
    eventType: 'エクストリーマーカップ',
    mainHolomem: '天音かなた',
    hasWon: true,
    date: '2025-03-05'
  },
  {
    id: '2',
    url: 'https://x.com/HBSTkawasaki/status/1897934921941008648',
    deckName: 'レイネイオフィ',
    region: '神奈川',
    participants: 25,
    eventType: 'エクストリーマーカップ',
    mainHolomem: '',
    hasWon: false,
    date: '2025-03-05'
  },
  // 他のデータは省略
];

// 事前計算されたデータ
const preCalculatedData = {
  daily: {
    startDate: '2025-03-06',
    endDate: '2025-03-07',
    totalTournaments: 5,
    usageData: [
      { name: '天音かなた', usage: 35, count: 3, color: '#76c0ea' },
      { name: '白上フブキ', usage: 30, count: 3, color: '#53c7ea' },
      { name: 'さくらみこ', usage: 20, count: 2, color: '#FE4B74' },
      { name: '戌神ころね', usage: 15, count: 1, color: '#dcb414' },
      { name: '兎田ぺこら', usage: 10, count: 1, color: '#65baea' },
      // その他のデータ
    ],
    eventTypeData: {
      'エクストリーマーカップ': 2,
      'ショップ大会': 2,
      '交流会': 1
    },
    regionData: {
      '関東': 3,
      '関西': 1,
      '九州': 1
    }
  },
  weekly: {
    startDate: '2025-03-01',
    endDate: '2025-03-07',
    totalTournaments: 12,
    usageData: [
      { name: '天音かなた', usage: 30, count: 4, color: '#76c0ea' },
      { name: '白上フブキ', usage: 25, count: 3, color: '#53c7ea' },
      { name: 'さくらみこ', usage: 20, count: 2, color: '#FE4B74' },
      { name: '戌神ころね', usage: 15, count: 2, color: '#dcb414' },
      { name: '兎田ぺこら', usage: 10, count: 1, color: '#65baea' },
      // その他のデータ
    ],
    eventTypeData: {
      'エクストリーマーカップ': 5,
      'ショップ大会': 4,
      '交流会': 3
    },
    regionData: {
      '関東': 5,
      '関西': 3,
      '九州': 2,
      '中部': 1,
      '北海道': 1
    }
  },
  // monthly, yearlyも同様に
};

// ホロメン詳細データ
const holomemDetailsData = {
  '天音かなた': {
    regions: [
      { region: '関東', rank: 1, percentage: 42 },
      { region: '関西', rank: 2, percentage: 35 },
      { region: '九州', rank: 3, percentage: 28 },
    ],
    trends: { weeklyChange: 5, monthlyChange: -2 },
    eventTypes: [
      { name: 'エクストリーマーカップ', value: 40 },
      { name: 'ショップ大会', value: 32 },
      { name: '交流会', value: 28 },
    ]
  },
  '白上フブキ': {
    regions: [
      { region: '関東', rank: 2, percentage: 38 },
      { region: '北海道', rank: 1, percentage: 40 },
      { region: '東北', rank: 2, percentage: 31 },
    ],
    trends: { weeklyChange: -3, monthlyChange: 4 },
    eventTypes: [
      { name: 'エクストリーマーカップ', value: 35 },
      { name: 'ショップ大会', value: 38 },
      { name: '交流会', value: 27 },
    ]
  },
  // 他のホロメンも同様に
};

module.exports = {
  holomemColors,
  tournamentData,
  preCalculatedData,
  holomemDetailsData
};

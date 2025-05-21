const {
  tournamentData,
  preCalculatedData,
  holomemDetailsData
} = require('../data/mockData');

// 全トーナメントデータを取得
exports.getAllTournaments = (req, res) => {
  const { region, eventType, holomem } = req.query;

  let filteredData = [...tournamentData];

  if (region) {
    filteredData = filteredData.filter(t => t.region === region);
  }

  if (eventType) {
    filteredData = filteredData.filter(t => t.eventType === eventType);
  }

  if (holomem) {
    filteredData = filteredData.filter(t => t.mainHolomem === holomem);
  }

  res.json(filteredData);
};

// IDでトーナメントを取得
exports.getTournamentById = (req, res) => {
  const tournament = tournamentData.find(t => t.id === req.params.id);

  if (!tournament) {
    return res.status(404).json({ message: 'Tournament not found' });
  }

  res.json(tournament);
};

// 期間ごとの統計データを取得
exports.getStatsByPeriod = (req, res) => {
  const { period } = req.params;

  if (!['daily', 'weekly', 'monthly', 'yearly'].includes(period)) {
    return res.status(400).json({ message: 'Invalid period. Use daily, weekly, monthly, or yearly' });
  }

  const data = preCalculatedData[period];

  if (!data) {
    return res.status(404).json({ message: 'Data not found for this period' });
  }

  res.json(data);
};

// ホロメンの詳細情報を取得
exports.getHolomemDetails = (req, res) => {
  const { name } = req.params;

  const holomem = holomemDetailsData[name];

  if (!holomem) {
    return res.status(404).json({ message: 'Holomem details not found' });
  }

  res.json({
    name,
    ...holomem
  });
};

// 全ての統計情報を取得
exports.getAllStats = (_req, res) => {
  res.json({
    daily: preCalculatedData.daily,
    weekly: preCalculatedData.weekly,
    monthly: preCalculatedData.monthly,
    yearly: preCalculatedData.yearly
  });
};

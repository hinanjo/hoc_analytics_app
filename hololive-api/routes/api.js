const express = require('express');
const router = express.Router();
const holomemController = require('../controllers/holomemController');

// トーナメントデータ取得
router.get('/tournaments', holomemController.getAllTournaments);
router.get('/tournaments/:id', holomemController.getTournamentById);

// 分析データ取得
router.get('/stats/:period', holomemController.getStatsByPeriod);
router.get('/holomem/:name', holomemController.getHolomemDetails);

// 全期間の統計情報
router.get('/stats', holomemController.getAllStats);

module.exports = router;

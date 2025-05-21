const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェア
app.use(cors());
app.use(express.json());

// ルート
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// 基本ルート
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hololive Card Game API' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// index.js
const express = require('express');
const app = express();

// 静的ファイル配信
app.use(express.static('public'));

// ルート
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// エラーハンドリング
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// サーバー起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
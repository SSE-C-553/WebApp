const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // リクエストされたURLを取得
    const url = req.url === '/' ? '/composition.html' : req.url;
    // ファイルのパスを作成
    const filePath = path.join(__dirname, 'public', url);
    // ファイルが存在するかチェック
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // ファイルが存在しない場合は404を返す
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        // ファイルが存在する場合は読み取りストリームを作成してレスポンスとして送信
        fs.createReadStream(filePath).pipe(res);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
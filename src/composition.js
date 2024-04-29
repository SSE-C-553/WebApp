const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'composition.html' : req.url);
    const extname = path.extname(filePath);

    // デフォルトでHTMLファイルを提供するようにします
    if (extname === '') {
        filePath += '.html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // ファイルが見つからない場合は404エラーを返します
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found</h1>');
            } else {
                // その他のエラーの場合は、500エラーを返します
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // ファイルが見つかった場合は、コンテンツを返します
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
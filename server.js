const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open your browser and navigate to http://localhost:${PORT}`);
});

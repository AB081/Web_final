const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Bharathfall2025:abcdefg@cluster0.veu7rud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'legends';
const collectionName = 'sf';

const client = new MongoClient(uri);

const PORT = 4627;

async function fetchData() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const data = await collection.find({}).toArray();
  return data;
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    try {
      const data = await fetchData();
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch data' }));
    }
  } else {
    let filePath = req.url === '/' 
      ? path.join(__dirname, 'resume', 'index.html') 
      : path.join(__dirname, 'resume', req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 PAGE NOT FOUND — Try /api</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

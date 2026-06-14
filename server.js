// Author: Antas Lee
// Copyright: © 2026 ZHENTAO LI. All rights reserved.
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { exec } = require('child_process');

const PORT = 8080;
const ROOT = __dirname;
const CACHE = new Map();

const MIME = {
  '.html':'text/html; charset=utf-8',
  '.js':'application/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.csv':'text/csv; charset=utf-8',
  '.png':'image/png',
  '.svg':'image/svg+xml',
  '.ico':'image/x-icon',
  '.txt':'text/plain; charset=utf-8',
};

function ext(p){ return path.extname(p).toLowerCase(); }

function canGzip(p){
  const e = ext(p);
  return ['.js','.css','.html','.json','.csv','.svg','.txt'].includes(e);
}

function compress(raw){
  if(CACHE.has(raw)) return CACHE.get(raw);
  const buf = zlib.gzipSync(raw, { level: 6 });
  CACHE.set(raw, buf);
  return buf;
}

// pre-warm cache for large files
console.log('[INFO] Pre-compressing large files (>100KB)...');
const files = fs.readdirSync(ROOT);
for(const f of files){
  const fp = path.join(ROOT, f);
  if(!fs.statSync(fp).isFile()) continue;
  if(fs.statSync(fp).size > 100*1024 && canGzip(f)){
    const raw = fs.readFileSync(fp);
    compress(raw);
    console.log('  [CACHED] ' + f);
  }
}
console.log('[OK] Cache warm-up complete.\n');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if(reqPath === '/') reqPath = '/FIFAWorldCup.html';
  
  const safe = path.normalize(reqPath).replace(/^(\\.\\.|[\/])/,'');
  const filePath = path.join(ROOT, safe);
  
  if(!filePath.startsWith(ROOT)){
    res.writeHead(403);
    return res.end('Forbidden');
  }
  
  if(!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()){
    res.writeHead(404);
    return res.end('Not Found: ' + reqPath);
  }
  
  const mime = MIME[ext(filePath)] || 'application/octet-stream';
  const raw = fs.readFileSync(filePath);
  
  const ae = req.headers['accept-encoding'] || '';
  if(canGzip(filePath) && ae.includes('gzip') && raw.length > 1024){
    const zipped = compress(raw);
    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Encoding': 'gzip',
      'Cache-Control': 'no-cache'
    });
    const ratio = ((1 - zipped.length/raw.length)*100).toFixed(1);
    console.log('[GZIP] ' + path.basename(filePath) + '  ' +
      (raw.length/1024).toFixed(0)+'KB -> '+(zipped.length/1024).toFixed(0)+'KB  (-'+ratio+'%)');
    return res.end(zipped);
  }
  
  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': 'no-cache'
  });
  res.end(raw);
});

server.listen(PORT, () => {
  console.log('====================================================');
  console.log('  FIFA World Cup Data Analysis V1.70');
  console.log('  Local server with gzip compression');
  console.log('  http://localhost:' + PORT);
  console.log('====================================================');
  
  // auto-open browser
  const plat = process.platform;
  const url = 'http://localhost:' + PORT;
  if(plat === 'win32') exec('start "" "' + url + '"');
  else if(plat === 'darwin') exec('open "' + url + '"');
  else exec('xdg-open "' + url + '"');
});

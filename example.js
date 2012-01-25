var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('It worked\n');
}).listen(process.env.PORT, "0.0.0.0");
console.log('Server running at http://0.0.0.0:process.env.PORT/');
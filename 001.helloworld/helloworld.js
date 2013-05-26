var server = require('http');

server.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Hello Node.js!\n");
}).listen(3001, '0.0.0.0');

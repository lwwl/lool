var server = require('http');

server.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Hello Node.JS!!!\n");
}).listen(3005, '0.0.0.0');

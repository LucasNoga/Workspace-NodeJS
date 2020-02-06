var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true);
	var test = url.parse(req.url, false);
	var q2 = q.query;
	var test2 = test.query;
	var txt = q2.year + " " + q2.month;
	console.log("q", q);
	console.log("t", test);
	console.log("q2", q2);
	console.log("t2", test2);
	res.end(txt);
}).listen(8080);
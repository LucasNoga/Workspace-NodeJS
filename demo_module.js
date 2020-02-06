var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("TEST")
  res.write("<html><body>");
  res.write("<div class=\"test\">The date and time are currently: " + dt.myDateTime() + "</div>");
  res.end();
  //res.write("</body></html>");
}).listen(8080); 
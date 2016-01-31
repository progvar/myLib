const http = require('http');
const random = require('./index.js');
const port = process.env.PORT || 3000;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(random.getRandom().toString());
}).listen(port, function(){
  console.log('Listening on ' + port);
});

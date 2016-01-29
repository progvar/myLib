var allText = require('./some_text.json');
var ura = require('unique-random-array');
var getRandom = ura(allText);


var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(process.env.PORT || 3000);

console.log("Listening");
// ^^ webserver ^^

module.exports = {
  all: allText,
  random: randomFunc
}

function randomFunc(number){
  if(number === undefined){
    return getRandom();
  } else {
    var texts = [];
    for(var i = 0;i < number; i++){
      texts.push(getRandom());
    }
    return texts;
  }
}

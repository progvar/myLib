var allText = require('./some_text.json');
var ura = require('unique-random-array');
var getRandom = ura(allText);

// webserver

const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(getRandom().toString());
}).listen(port, function(){
  console.log('Listening on ' + port);
});
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

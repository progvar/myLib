var allText = require('./some_text.json');
var ura = require('unique-random-array');
var getRandom = ura(allText);

// Just to test heroku we need a webserver

var http = require('http');
var server = http.createServer(requestHandler);
const PORT = process.env.PORT || 3000;


function requestHandler(req, res){
  res.end(getRandom());
}

server.listen(PORT, function(){
  console.log('Listening on port number: ' + PORT);
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

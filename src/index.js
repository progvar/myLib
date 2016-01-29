var allText = require('./some_text.json');
var ura = require('unique-random-array');
var getRandom = ura(allText);

// Just to test heroku we need a webserver
var PORT = process.env.PORT || 3000;
var http = require('http');

http.createServer(requestHandler).listen(PORT, function(){
  console.log('Listening on port number: ' + PORT);
});


function requestHandler(req, res){
  res.end(getRandom());
}

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

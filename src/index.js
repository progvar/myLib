var allText = require("./some_text.json");
var ura = require("unique-random-array");
var getRandom = ura(allText);
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

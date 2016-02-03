'use strict'
const allText = require('./some_text.json');
const ura = require('unique-random-array');
const getRandom = ura(allText);

function randomFunc(number) {
  if (number !== undefined) {
    let texts = [];
    for (var i = 0; i < number; i++) {
      texts.push(getRandom());
    }
    return texts;
  }
  return getRandom();
}

module.exports = {
  all: allText,
  random: randomFunc
};

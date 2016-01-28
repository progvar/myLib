var allText = require("./some_text.json");
var ura = require("unique-random-array");

module.exports = {
  all: allText,
  random: ura(allText)
}

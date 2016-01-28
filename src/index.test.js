var allText = require('./index');

var expect = require('chai').expect;

describe('all', function(){
  it('should be an array of strings!', function(){
    expect(allText.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array){
      return array.every(function(item){
        return typeof item === 'string'
      });
    }
  });

  it('should contain "cacacacacca"', function(){
    expect(allText.all).to.include('cacacacacca');
  });
});

describe('random', function(){
  it('it should return a random text', function(){
    var randomItem = allText.random();
    expect(allText.all).to.include(randomItem);
  })
});

var big = require('bignumber.js');
var primes = require('./primes.json');

module.exports = function (id) {
  return {
    prime: parseBig(primes[id]),
    generator: 2
  };
};

module.exports.ids = Object.keys(primes);

function parseBig (obj) {
  var b = big(0);
  b.c = obj.c;
  b.e = obj.e;
  b.s = obj.s;
  return b;
}

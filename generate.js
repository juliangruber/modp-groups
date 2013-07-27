var big = require('bignumber.js');
var fs = require('fs');

var pi = Math.PI.toPrecision(13);
var primes = {};

// 768-bit
primes.modp1 = big(2).pow(768)
  .minus(big(2).pow(704))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(638).times(pi).plus(149686)
      )
  );

// 1024-bit
primes.modp2 = big(2).pow(1024)
  .minus(big(2).pow(960))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(894).times(pi).plus(129093)
      )
  );

// 1536-bit
primes.modp5 = big(2).pow(1536)
  .minus(big(2).pow(1472))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(1406).times(pi).plus(741804)
      )
  );

// 2048-bit
primes.modp14 = big(2).pow(2048)
  .minus(big(2).pow(1984))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(1918).times(pi).plus(124476)
      )
  );

// 3072-bit
primes.modp15 = big(2).pow(3072)
  .minus(big(2).pow(3008))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(2942).times(pi).plus(1690314)
      )
  );

// 4096-bit
primes.modp16 = big(2).pow(4096)
  .minus(big(2).pow(4032))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(3966).times(pi).plus(240904)
      )
  );

// 6144-bit
primes.modp17 = big(2).pow(6144)
  .minus(big(2).pow(6080))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(6014).times(pi).plus(929484)
      )
  );

// 8192-bit
primes.modp18 = big(2).pow(8192)
  .minus(big(2).pow(8128))
  .minus(1)
  .plus(
    big(2)
      .pow(64)
      .times(
        big(2).pow(8062).times(pi).plus(4743158)
      )
  );

fs.writeFileSync(__dirname + '/primes.json', JSON.stringify(primes));

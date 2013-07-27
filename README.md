
# modp-groups

MODP groups used by
[node core](https://github.com/joyent/node/blob/master/src/node_crypto_groups.h) for
[Diffie-Hellman key exchange](http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange).

Generated following the specs

* [RFC 2412](http://tools.ietf.org/html/rfc2412)
* [RFC 3526](http://tools.ietf.org/html/rfc3526)

[![build status](https://secure.travis-ci.org/juliangruber/modp-groups.png)](http://travis-ci.org/juliangruber/modp-groups)

[![testling badge](https://ci.testling.com/juliangruber/modp-groups.png)](https://ci.testling.com/juliangruber/modp-groups)

## Usage

```js
var getGroup = require('modp-groups');

var group = getGroup('modp5');
// => { prime: <BigNumber>, generator: 2 }
```

## API

### getGroup(id)

Get the group with the given `id`, which has the two keys `prime` &mdash; which
is a [bignumber](https://github.com/MikeMcl/bignumber.js) &mdash; and
`generator`.

### getGroup.ids

All the available group names.

## Installation

With [npm](https://npmjs.org) do:

```
npm install modp-groups
```

## License

The MIT license.


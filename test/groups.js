var test = require('tape');
var getGroup = require('..');
var bignumber = require('bignumber.js');

test('groups', function (t) {
  t.plan(getGroup.ids.length * 2);

  getGroup.ids.forEach(function (id) {
    var group = getGroup(id);
    t.assert(group.prime instanceof bignumber);
    t.equal(group.generator, 2);
  });
});

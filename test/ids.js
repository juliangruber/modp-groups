var test = require('tape');
var getGroup = require('..');

test('ids', function (t) {
  t.plan(8);
  getGroup.ids.forEach(function (id) {
    t.assert(/modp[0-9]+/.test(id));
  });
});

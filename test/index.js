var da = require("../");
var test = require("tape");

test("da", function (t) {
  var result = da([3, 1, 2, 4], [5, 4, 3, 6]);
  t.deepEqual(result, {'lhs': [1, 2], 'rhs': [5, 6]});
  t.end();
});

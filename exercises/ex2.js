var _ = require('lodash');

function repeat(operation, num) {
  // _.times(num, operation);
  operation()
  if (num > 0) repeat(operation, num - 1 );
}

// Do not remove the line below
module.exports = repeat
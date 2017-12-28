'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueOrResult = valueOrResult;
function valueOrResult(arg) {
  if (typeof arg === 'function') {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return arg.apply(null, args);
  }
  return arg;
}
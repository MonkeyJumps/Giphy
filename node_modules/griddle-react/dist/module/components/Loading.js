'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    'Loading\u2026'
  );
};

exports.default = Loading;
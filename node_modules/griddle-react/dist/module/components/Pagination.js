'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var Next = _ref.Next,
      Previous = _ref.Previous,
      PageDropdown = _ref.PageDropdown,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    Previous && _react2.default.createElement(Previous, null),
    PageDropdown && _react2.default.createElement(PageDropdown, null),
    Next && _react2.default.createElement(Next, null)
  );
};

exports.default = Pagination;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We're not going to be displaying a pagination bar for infinite scrolling.
var PaginationComponent = function PaginationComponent(props) {
  return _react2.default.createElement('span', null);
};

exports.default = PaginationComponent;
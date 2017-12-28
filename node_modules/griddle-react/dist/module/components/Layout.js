'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(_ref) {
  var Table = _ref.Table,
      Pagination = _ref.Pagination,
      Filter = _ref.Filter,
      SettingsWrapper = _ref.SettingsWrapper,
      Style = _ref.Style,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    Style && _react2.default.createElement(Style, null),
    _react2.default.createElement(Filter, null),
    _react2.default.createElement(SettingsWrapper, null),
    _react2.default.createElement(Table, null),
    _react2.default.createElement(Pagination, null)
  );
};

exports.default = component;
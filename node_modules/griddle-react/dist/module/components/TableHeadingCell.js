'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeadingCell = function TableHeadingCell(_ref) {
  var title = _ref.title,
      columnId = _ref.columnId,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      icon = _ref.icon,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'th',
    {
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: style,
      className: className
    },
    title
  );
};

exports.default = TableHeadingCell;
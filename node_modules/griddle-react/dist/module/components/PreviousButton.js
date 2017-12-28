"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviousButton = function PreviousButton(_ref) {
  var hasPrevious = _ref.hasPrevious,
      onClick = _ref.onClick,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text;
  return hasPrevious ? _react2.default.createElement(
    "button",
    { type: "button", onClick: onClick, style: style, className: className },
    text
  ) : null;
};

exports.default = PreviousButton;
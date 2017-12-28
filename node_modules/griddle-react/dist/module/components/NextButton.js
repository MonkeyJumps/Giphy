"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextButton = function NextButton(_ref) {
  var hasNext = _ref.hasNext,
      onClick = _ref.onClick,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text;
  return hasNext ? _react2.default.createElement(
    "button",
    { type: "button", onClick: onClick, style: style, className: className },
    text
  ) : null;
};

exports.default = NextButton;
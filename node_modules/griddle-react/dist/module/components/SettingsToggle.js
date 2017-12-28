"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsToggle = function SettingsToggle(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    "button",
    {
      onClick: onClick,
      type: "button",
      style: style,
      className: className
    },
    text
  );
};

exports.default = SettingsToggle;
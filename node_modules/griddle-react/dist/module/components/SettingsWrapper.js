'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a component that wraps all of the other settings components ( SettingsToggle, Settings, etc).
// All of the settings views will be hiddne if isEnabled = false
var SettingsWrapper = function SettingsWrapper(_ref) {
  var SettingsToggle = _ref.SettingsToggle,
      Settings = _ref.Settings,
      isEnabled = _ref.isEnabled,
      isVisible = _ref.isVisible,
      style = _ref.style,
      className = _ref.className;
  return isEnabled ? _react2.default.createElement(
    'div',
    { style: style, className: className },
    SettingsToggle && _react2.default.createElement(SettingsToggle, null),
    isVisible && _react2.default.createElement(Settings, null)
  ) : null;
};

exports.default = SettingsWrapper;
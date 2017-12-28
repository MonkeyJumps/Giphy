'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is responsible for rendering the individual settings sections
var Settings = function Settings(_ref) {
  var settingsComponents = _ref.settingsComponents,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    settingsComponents && settingsComponents.map(function (SettingsComponent, i) {
      return SettingsComponent && _react2.default.createElement(
        'div',
        { key: SettingsComponent.key || i },
        _react2.default.createElement(SettingsComponent, null)
      );
    })
  );
};

exports.default = Settings;
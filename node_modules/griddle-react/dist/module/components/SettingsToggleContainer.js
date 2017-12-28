'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = require('../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _dataSelectors = require('../selectors/dataSelectors');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancedSettingsToggle = function enhancedSettingsToggle(OriginalComponent) {
  return (0, _compose2.default)((0, _griddleConnect.connect)(function (state, props) {
    return {
      text: (0, _dataSelectors.textSelector)(state, { key: 'settingsToggle' }),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'SettingsToggle'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'SettingsToggle')
    };
  }, {
    toggleSettings: _actions.toggleSettings
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, _extends({}, props, {
      onClick: props.toggleSettings
    }));
  });
};

exports.default = enhancedSettingsToggle;
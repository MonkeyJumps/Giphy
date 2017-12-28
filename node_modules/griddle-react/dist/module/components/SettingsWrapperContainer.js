'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = require('../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = require('../selectors/dataSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedSettingsWrapper = function EnhancedSettingsWrapper(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (props) {
    return {
      Settings: props.components.Settings,
      SettingsToggle: props.components.SettingsToggle
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      isEnabled: (0, _dataSelectors.isSettingsEnabledSelector)(state),
      isVisible: (0, _dataSelectors.isSettingsVisibleSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'SettingsWrapper'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'SettingsWrapper')
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedSettingsWrapper;
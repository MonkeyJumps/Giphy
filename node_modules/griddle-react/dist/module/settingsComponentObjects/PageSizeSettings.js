'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = require('../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _dataSelectors = require('../selectors/dataSelectors');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedPageSizeSettings = (0, _compose2.default)((0, _griddleConnect.connect)(function (state) {
  return {
    pageSize: (0, _dataSelectors.pageSizeSelector)(state)
  };
}, {
  setPageSize: _actions.setPageSize
}), (0, _withState2.default)('value', 'updateValue', ''), (0, _withHandlers2.default)({
  onChange: function onChange(props) {
    return function (e) {
      props.updateValue(e.target.value);
    };
  },
  onSave: function onSave(props) {
    return function (e) {
      props.setPageSize(props.value);
    };
  }
}))(function (_ref) {
  var pageSize = _ref.pageSize,
      onChange = _ref.onChange,
      onSave = _ref.onSave;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { type: 'text', onChange: onChange, defaultValue: pageSize }),
    _react2.default.createElement(
      'button',
      { type: 'button', onClick: onSave },
      'Save'
    )
  );
});

exports.default = ComposedPageSizeSettings;
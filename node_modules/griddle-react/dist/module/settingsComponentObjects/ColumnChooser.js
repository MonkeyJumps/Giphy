'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = require('../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _dataSelectors = require('../selectors/dataSelectors');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  label: { clear: 'both' }
};

var ComposedColumnSettings = (0, _compose2.default)((0, _griddleConnect.connect)(function (state) {
  return {
    visibleColumns: (0, _dataSelectors.visibleColumnPropertiesSelector)(state),
    hiddenColumns: (0, _dataSelectors.hiddenColumnPropertiesSelector)(state)
  };
}, {
  toggleColumn: _actions.toggleColumn
}), (0, _withHandlers2.default)({
  onToggle: function onToggle(_ref) {
    var toggleColumn = _ref.toggleColumn;
    return function (event) {
      toggleColumn(event.target.name);
    };
  }
}))(function (_ref2) {
  var visibleColumns = _ref2.visibleColumns,
      hiddenColumns = _ref2.hiddenColumns,
      onToggle = _ref2.onToggle;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Visible Columns'
      ),
      Object.keys(visibleColumns).map(function (v) {
        return _react2.default.createElement(
          'label',
          {
            htmlFor: visibleColumns[v].id,
            key: visibleColumns[v].id,
            style: style.label
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            name: visibleColumns[v].id,
            checked: true,
            onChange: onToggle
          }),
          visibleColumns[v].title || visibleColumns[v].id
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Hidden Columns'
      ),
      Object.keys(hiddenColumns).map(function (v) {
        return _react2.default.createElement(
          'label',
          {
            key: hiddenColumns[v].id,
            htmlFor: hiddenColumns[v].id,
            style: style.label
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            name: hiddenColumns[v].id,
            onChange: onToggle,
            defaultChecked: false
          }),
          hiddenColumns[v].title || hiddenColumns[v].id
        );
      })
    )
  );
});

exports.default = ComposedColumnSettings;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SpacerRow = require('./SpacerRow');

var _SpacerRow2 = _interopRequireDefault(_SpacerRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var rowIds = _ref.rowIds,
      Row = _ref.Row;
  return _react2.default.createElement(
    'tbody',
    null,
    _react2.default.createElement(_SpacerRow2.default, { placement: 'top' }),
    rowIds && rowIds.map(function (r) {
      return _react2.default.createElement(Row, { key: r, griddleKey: r });
    }),
    _react2.default.createElement(_SpacerRow2.default, { placement: 'bottom' })
  );
};

exports.default = TableBody;
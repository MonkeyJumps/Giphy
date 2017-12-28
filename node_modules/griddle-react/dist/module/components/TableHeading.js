'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeading = function TableHeading(_ref) {
  var columnTitles = _ref.columnTitles,
      columnIds = _ref.columnIds,
      TableHeadingCell = _ref.TableHeadingCell,
      style = _ref.style,
      className = _ref.className;

  var headingCells = columnIds && columnTitles && columnTitles.map(function (t, i) {
    return _react2.default.createElement(TableHeadingCell, { key: columnIds[i], title: t, columnId: columnIds[i] });
  });

  return _react2.default.createElement(
    'thead',
    { style: style, className: className },
    _react2.default.createElement(
      'tr',
      null,
      headingCells
    )
  );
};

exports.default = TableHeading;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = undefined;

var _PageSizeSettings = require('./PageSizeSettings');

var _PageSizeSettings2 = _interopRequireDefault(_PageSizeSettings);

var _ColumnChooser = require('./ColumnChooser');

var _ColumnChooser2 = _interopRequireDefault(_ColumnChooser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = exports.components = {
  pageSizeSettings: _PageSizeSettings2.default,
  columnChooser: _ColumnChooser2.default
};

exports.default = {
  pageSizeSettings: { order: 1 },
  columnChooser: { order: 2 }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _compositionUtils = require('../utils/compositionUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EnhancedHeadingCell = function EnhancedHeadingCell(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (_ref) {
    var onSort = _ref.events.onSort,
        props = _objectWithoutProperties(_ref, ['events']);

    return _extends({}, props, {
      onClick: (0, _compositionUtils.combineHandlers)([function () {
        return onSort && onSort(props.sortProperty || { id: props.columnId });
      }, props.onClick])
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedHeadingCell;
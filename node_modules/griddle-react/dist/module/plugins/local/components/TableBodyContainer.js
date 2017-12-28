'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = require('../../../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _localSelectors = require('../selectors/localSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedTableBodyContainer = function ComposedTableBodyContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object,
    selectors: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (props) {
    return _extends({
      Row: props.components.Row,
      visibleRowIdsSelector: props.selectors.visibleRowIdsSelector
    }, props);
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      visibleRowIds: props.visibleRowIdsSelector(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'TableBody'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'TableBody')
    };
  }))(function (_ref) {
    var Row = _ref.Row,
        visibleRowIds = _ref.visibleRowIds,
        style = _ref.style,
        className = _ref.className;
    return _react2.default.createElement(OriginalComponent, {
      rowIds: visibleRowIds,
      Row: Row,
      style: style,
      className: className
    });
  });
};

exports.default = ComposedTableBodyContainer;
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

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state) {
    return {
      columnTitles: (0, _localSelectors.columnTitlesSelector)(state),
      columnIds: (0, _localSelectors.columnIdsSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'TableHeading'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'TableHeading')
    };
  }), (0, _mapProps2.default)(function (props) {
    return _extends({
      TableHeadingCell: props.components.TableHeadingCell
    }, props);
  })
  // withHandlers({ 
  //   TableHeadingCell: props => props.components.TableHeadingCell
  // })
  )(function (_ref) {
    var TableHeadingCell = _ref.TableHeadingCell,
        columnTitles = _ref.columnTitles,
        columnIds = _ref.columnIds,
        className = _ref.className,
        style = _ref.style;
    return _react2.default.createElement(OriginalComponent, {
      columnTitles: columnTitles,
      columnIds: columnIds,
      TableHeadingCell: TableHeadingCell,
      className: className,
      style: style
    });
  });
};

exports.default = ComposedContainerComponent;
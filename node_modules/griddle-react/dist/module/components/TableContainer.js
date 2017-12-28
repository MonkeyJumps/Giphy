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

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }),
  //TODO: Should we use withHandlers here instead? I realize that's not 100% the intent of that method
  (0, _mapProps2.default)(function (props) {
    return {
      TableHeading: props.components.TableHeading,
      TableBody: props.components.TableBody,
      Loading: props.components.Loading,
      NoResults: props.components.NoResults
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      dataLoading: (0, _dataSelectors.dataLoadingSelector)(state),
      visibleRows: (0, _dataSelectors.visibleRowCountSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Table'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Table')
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedContainerComponent;